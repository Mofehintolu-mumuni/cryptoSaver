App = {
    web3Provider: null,
    contracts: {},
    account: '0x0',
    loading: false,
    tokenPrice: 1000000000000000,
    numberOfDigits : 1000000000000000000,
    tokensSold: 0,
    tokensAvailable: 750000,
  
    init: function() {
      console.log("App initialized...")
      return App.initWeb3();
    },
  
    initWeb3: async () => {
      if (typeof web3 !== 'undefined') {
        App.web3Provider = web3.currentProvider;
        web3 = new Web3(web3.currentProvider);
      } else {
        window.alert("Please connect to Metamask.")
      }
      // Modern dapp browsers...
      if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
          // Request account access if needed
          await ethereum.enable();
          // Acccounts now exposed
          web3.eth.sendTransaction({/* ... */});
        } catch (error) {
          // User denied account access...
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        App.web3Provider = web3.currentProvider;
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
      }
      // Non-dapp browsers...
      else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
      }
      return App.initContracts();
    },
  
    initContracts: function() {
      $.getJSON("../savings_contract_one/build/contracts/eth_savings_bank.json", function(dappTokenSale) {
        App.contracts.DappTokenSale = TruffleContract(dappTokenSale);
        App.contracts.DappTokenSale.setProvider(App.web3Provider);
        App.contracts.DappTokenSale.deployed().then(function(dappTokenSale) {
          console.log("Dapp Token Sale Address:", dappTokenSale.address);
        }).catch((err) => 
        {
          console.log(err.message);
        });
      }).done(function() {
        $.getJSON("../savings_contract_one/build/contracts/eth_savings_bank.json", function(dappToken) {
          App.contracts.DappToken = TruffleContract(dappToken);
          App.contracts.DappToken.setProvider(App.web3Provider);
          App.contracts.DappToken.deployed().then(function(dappToken) {
            console.log("Dapp Token Address:", dappToken.address);
          }).catch((err) => 
          {
            console.log(err.message);
          });
  
          //App.listenForEvents();
          return App.render();
        });
      })
    },
  
    // Listen for events emitted from the contract
    listenForEvents: function() {
      App.contracts.DappTokenSale.deployed().then(function(instance) {
        instance.Sell({}, {
          fromBlock: 0,
          toBlock: 'latest',
        }).watch(function(error, event) {
          console.log("event triggered", event);
          App.render();
        })
      })
    },
  
    render: function() {
      if (App.loading) {
        return;
      }
      App.loading = true;
  
      var loader  = $('#loader');
      var content = $('#content');
  
      loader.show();
      content.hide();
  
      // Load account data
     web3.eth.getCoinbase(function(err, account) {
        if(err === null) {
          App.account = account;
          $('#accountAddress').html("Your Account: " + account);
          console.log(account);
        }
      });
      
     //console.log(web3.eth.accounts);
  
    /*web3.eth.getAccounts(function(err,account)
      {
        if(err === null) {
          App.account = account[1];
          $('#accountAddress').html("Your Account: " + App.account);
          console.log(App.account);
        }
      });
      */
      
  
      // Load token sale contract
      App.contracts.DappTokenSale.deployed().then(function(instance) {
        dappTokenSaleInstance = instance;
        return dappTokenSaleInstance.checkContractValue();
      }).then(function(value) {
  
  
        $('.token-price').html(value.toNumber()/App.numberOfDigits);
        //$('.token-price').html(web3.fromWei(App.tokenPrice, "ether").toNumber());
        return dappTokenSaleInstance.TotalAmount();
      }).then(function(totalAmount) {
        let amountTotal = totalAmount.toNumber();
        $('.tokens-sold').html(amountTotal/App.numberOfDigits);
        App.loading = false;
          loader.hide();
          content.show();
      
      });
    },
  //
    buyTokens: function() {
      $('#content').hide();
      $('#loader').show();
      var numberOfTokens = $('#numberOfTokens').val();
      App.contracts.DappTokenSale.deployed().then(function(instance) {
        let ether_sent = numberOfTokens * 1000000000000000000;
       // App.account = "0xA1369df64aEF8a1426B008b98c7446a38560a85d";
        return instance.DepositFunds(ether_sent, {
          from: App.account,
          value: ether_sent,
          gas: 500000 // Gas limit
        }).then(function(result) {
          console.log("Ether saved...")
          $('form').trigger('reset') // reset number of tokens in form
          // Wait for Sell event
        });
      });
    },
  
    withdrawTokens : function()
    {
      let value_to_get = $('#getTokens').val();
  
      App.contracts.DappTokenSale.deployed().then(function(instance) {
        var ether_to_get = value_to_get * 1000000000000000000;
        return instance.WithdrawFunds(ether_to_get, {
          from: App.account,
          //value: ether_to_get,
          gas: 500000 // Gas limit
        });
      }).then(function(result) {
        if(result)
        {
          console.log("Ether Withdrawn...");
        }
        else
        {
          console.log("Error...");
        }
        
        $('form').trigger('reset') // reset number of tokens in form
        // Wait for Sell event
      });
  
    },
  
    Getbalance : function()
    {
      App.contracts.DappTokenSale.deployed().then(function(instance) {
       // App.account = "0xA1369df64aEF8a1426B008b98c7446a38560a85d";
        return instance.getBalance(App.account, {
          from: App.account
         });
      }).then(function(value) {
      let mybalance = value.toNumber();
      
      $('#showBalance').html(mybalance);
      });
      
  
    }
  
  
  
  }
  
  $(function() {
    $(window).load(function() {
      App.init();
      $('#balancegetter').click(function()
      {
        App.Getbalance();
      });
    })
  });
  