App = {
    web3Provider: null,
    loading: false,
    oneEther: 1000000000000000000,
    contracts: {},
    account: '0x0',
  
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
      $.getJSON("../savings_contract_one/build/contracts/eth_savings_bank.json", function(contractABI) {
        App.contracts.SavingsBank = TruffleContract(contractABI);
        App.contracts.SavingsBank.setProvider(App.web3Provider);
        return App.render();
      })
      
    },
  
  
  
    // Listen for events emitted from the contract
    listenForEvents: function() {
      App.contracts.SavingsBank.deployed().then(function(instance) {
        instance.Sell({}, {
          fromBlock: 0,
          toBlock: 'latest',
        }).watch(function(error, event) {
          console.log("event triggered", event);
          App.render();
        })
      })
    },
    render: async function() {
  
  
      // Load account data
     web3.eth.getCoinbase(function(err, account) {
        if(err === null) {
          App.account = account;
          $('#accountAddress').html("Your Account: " + account);
          console.log(account);
        }
      });
      
  
    /*web3.eth.getAccounts(function(err,account)
      {
        if(err === null) {
          App.account = account[1];
          $('#accountAddress').html("Your Account: " + App.account);
          console.log(App.account);
        }
      });
      */
      
          //get user savings balance
          
           App.Getbalance();
           App.getTotalAmountWithdrawn();
           App.getTotalAmountSaved();
          
      // Load smart contract
      App.contracts.SavingsBank.deployed().then(function(instance) {
        contractInstance = instance;
        return contractInstance.GetUserInfo(App.account, {
          from: App.account,
          gas: 500000
        }).then(function(result)
        {
          console.log(result);
          //use array destructuring to get array data
  
          //if user firstname or lastname is not equal to null
          //show edit form else show register form
  
  
        }).catch((error) =>{
          alert("An error occurred please refresh this page.");
        })
        
      });



    },
    depositEther:  async function(event) {
      event.preventDefault();
    
      var AmountOfEther = $('#numberOfEtherToDeposit').val();
      try{
        var contract = await App.contracts.SavingsBank.deployed();
        let ether_sent = AmountOfEther * App.oneEther;
        let contractCall = await contract.DepositFunds(ether_sent, {
                                                      from: App.account,
                                                      value: ether_sent,
                                                      gas: 500000 // Gas limit
                                                    });
                              
        alert("Ether saved...");
        console.log(contractCall);
        
      }catch(error)
      {
        console.log(error.message);
      }
     


     /* App.contracts.SavingsBank.deployed().then(function(instance) {
        let ether_sent = AmountOfEther * App.oneEther;
   
        return instance.DepositFunds(ether_sent, {
          from: App.account,
          value: ether_sent,
          gas: 500000 // Gas limit
        })
      }).then(function(result) {
          //use alert not console.log
          alert("Ether saved...");
        console.log("Ether saved...");
         console.log(result);
        //run functions to update balance
      
        //location.reload(true); 
        // Wait for Sell event
      }).catch((error)=>
      {
        console.log(error.message);
      })

      */

    },
    withdrawEther: function(event)
    {
     //$('#content').hide();
     // $('#loader').show();
     event.preventDefault();
      var AountOfEther = $('#numberOfEtheToWithdraw').val();
      App.contracts.SavingsBank.deployed().then(function(instance) {
        let ether_sent = AountOfEther * App.oneEther;
   
        return instance.WithdrawFunds(ether_sent, {
          from: App.account,
          gas: 5000000000 // Gas limit
        });
        
      }).then(function(result) {
        alert("Ether withdrawn...");
        console.log("Ether withdrawn...");
         console.log(result);
         //run functions to update balance
         
      }).catch((error)=>
      {
        console.log(error.message);
      })
  
    },
    Getbalance : function()
    {
      App.contracts.SavingsBank.deployed().then(function(instance) {
    
      //  console.log(instance);
       // console.log(App.account);
        return instance.getAmountInSavings(App.account, {
          from: App.account,
          gas: 5000000000 
         });
      }).then((value)=> {
        console.log(value);
        let mybalance = value.toNumber() / App.oneEther;
        alert(mybalance);
        console.log(mybalance);
        $('#showBalance').html(mybalance);
        }).catch((error)=>
        {
          console.log(error);
        })
    },
    getTotalAmountSaved : function()
    {
      App.contracts.SavingsBank.deployed().then(function(instance) {
    
        console.log(instance);
        console.log(App.account);
        return instance.getTotalAmountSaved(App.account, {
          from: App.account,
          gas: 5000000000
         });
      }).then((value)=> {
        console.log(value);
        let mybalance = value.toNumber() / App.oneEther;
        alert(mybalance);
        console.log(mybalance);
        $('#etherStored').html(mybalance);
        }).catch((error)=>
        {
          console.log(error);
        })
    },
    getTotalAmountWithdrawn : function()
    {
      App.contracts.SavingsBank.deployed().then(function(instance) {
    
        console.log(instance);
        console.log(App.account);
        return instance.getTotalAmountWithdrawn(App.account, {
          from: App.account,
          gas: 5000000000 
         });
      }).then((value)=> {
        console.log(value);
        let mybalance = value.toNumber() / App.oneEther;
        alert(mybalance);
        console.log(mybalance);
        $('#etherRemoved').html(mybalance);
        }).catch((error)=>
        {
          console.log(error);
        })
    }
  
  
      }
  
  $(function() {
    $(window).load(function() {
      App.init();
     
    })
  });
  

  ////https://github.com/sablierhq/sablier
  ///The protocol for real-time finance on the Ethereum blockchain https://sablier.finance