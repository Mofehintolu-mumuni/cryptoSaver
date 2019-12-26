App = {
  web3Provider: null,
  loading: false,
  oneEther: 1000000000000000000,
  contracts: {},
  account: '0x0',

  init: function() {
    alert("This application is connected to the Kovan ETH network, to use this application ensure that you have Metamask installed, have kovan ETH (KETH) and you are connected to the Kovan network!");
   // console.log("App initialized...")
    return App.initWeb3();
  },

  initWeb3: async () => {
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      window.alert("Please connect to Metamask cryptocurrency wallet.")
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
      alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
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

  render: function() {


    // Load account data
   web3.eth.getCoinbase(function(err, account) {
      if(err === null) {
        App.account = account;
        $('#accountAddress').html("Your Account: " + account);
       // console.log(account);
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
        App.getTotalAmountSaved();
        App.getTotalAmountWithdrawn();
        
    // Load smart contract
    App.contracts.SavingsBank.deployed().then(function(instance) {
      contractInstance = instance;
      alert("Connecting to smart contract....");
      return contractInstance.GetUserInfo(App.account, {
        from: App.account,
        gas: 500000
      }).then(function(result)
      {
       // console.log(result);
        //use array destructuring to get array data
        
       /* console.log(result[0]);
        console.log(result[1]);
        console.log(result[2]);
        console.log(result[3]);
        console.log(result[4]);
        console.log(result[5]);
        console.log(result.length);
        */
        //if user firstname or lastname is not equal to null
        //show edit form else show register form
        let editForm = $('#editAccount');
        let regForm = $('#regAccount');

        let responseLength = result.length;
        if((null != responseLength) && (result[0] != "NULL"))
        {
          if(responseLength > 0)
          {

          $('#edit_Firstname').val(result[0]);
          $('#edit_middlename').val(result[1]);
          $('#edit_lastname').val(result[2]);
          $('#edit_sex').val(result[3]);
          $('#edit_email').val(result[4]);
          $('#edit_phoneNumber').val(result[5]);
            //console.log(result[5]);
            editForm.show();
            regForm.hide();


          }
        }
        else
        {
          alert("You do not have an account on Crypto Saver.Register to use the Crypto Saver, if you are not registered any Ether sent to the smart contract would be lost!");
        }
        

      }).catch((error) =>{
        alert("An error occurred please refresh this page.");
      })
      
    });
  },



  depositEther: function(e) {
  
  e.preventDefault();
    var AmountOfEther = $('#numberOfEtherToDeposit').val();

     //set loading UX info to visible
    let depoLoading = $("#depoLoading");
    depoLoading.show();


    App.contracts.SavingsBank.deployed().then(function(instance) {
      let ether_sent = AmountOfEther * App.oneEther;

       return instance.DepositFunds(ether_sent, {
        from: App.account,
        value: ether_sent,
        gas: 500000 // Gas limit
      })
    }).then(function(result) {

      depoLoading.hide();
      alert("Ether saved successfully...");
      // console.log(result);
      //run functions to update balance
     
      location.reload(true);
  
    }).catch((error)=>
    {
      depoLoading.hide();
      alert("Ether not saved successfully...");
    })
  },


  withdrawEther: function(e)
  {
   //$('#content').hide();
   // $('#loader').show();
   e.preventDefault();
    var AountOfEther = $('#numberOfEtheToWithdraw').val();

    //set loading UX info to visible
    let withdrawLoading = $("#withdrawLoading");
      withdrawLoading.show();

    App.contracts.SavingsBank.deployed().then(function(instance) {
      let ether_sent = AountOfEther * App.oneEther;

      

      return instance.WithdrawFunds(ether_sent, {
        from: App.account,
        gas: 500000 // Gas limit
      });
      
    }).then(function(result) {
      
      withdrawLoading.hide();
      alert("Ether withdrawn successfully...");
   
       //run functions to update balance
       location.reload(true);
    }).catch((error)=>
    {
      withdrawLoading.hide();
      alert("Ether not withdrawn successfully...");
    })

  },
  Getbalance : function()
  {
    App.contracts.SavingsBank.deployed().then(function(instance) {
  
      //console.log(instance);
      //console.log(App.account);
      return instance.getAmountInSavings(App.account, {
        from: App.account
       });
    }).then((value)=> {
      let mybalance = (value.toNumber())/App.oneEther;
     // console.log(value);
     // console.log(mybalance);
      $('#showBalance').html(mybalance);
      }).catch((error)=>
      {
        //console.log(error.message);
      })
  },
  getTotalAmountSaved : function()
  {
    App.contracts.SavingsBank.deployed().then(function(instance) {
  
      //console.log(instance);
     // console.log(App.account);
      return instance.getTotalAmountSaved(App.account, {
        from: App.account
       });
    }).then((value)=> {
      let mybalance = (value.toNumber())/App.oneEther;
     // console.log(value);
      //console.log(mybalance);
      $('#etherStored').html(mybalance);
      }).catch((error)=>
      {
       // console.log(error.message);
      })
  },
  getTotalAmountWithdrawn : function()
  {
    App.contracts.SavingsBank.deployed().then(function(instance) {
  
      //console.log(instance);
      //console.log(App.account);
      return instance.getTotalAmountWithdrawn(App.account, {
        from: App.account
       });
    }).then((value)=> {
      let mybalance = (value.toNumber())/App.oneEther;
      //console.log(value);
     // console.log(mybalance);
      $('#etherRemoved').html(mybalance);
      }).catch((error)=>
      {
       // console.log(error.message);
      })
  },
  registerUser: function()
  {
    let _Firstname = $('#_Firstname').val();
     let _middlename = $('#_middlename').val();
    let _lastname = $('#_lastname').val();
    let _sex = $('#_sex').val();
    let _email = $('#_email').val();
    let _phoneNumber = $('#_phoneNumber').val();

    if((_Firstname != "") && (_middlename != "") && (_lastname != "") && (_sex != "") && (_email != "") && (_phoneNumber != ""))
    {
      //show loading for UX
      let regLoading = $("#regLoading");
      regLoading.show();

      App.contracts.SavingsBank.deployed().then(function(instance) {
   
        return instance.registerUser(App.account,_Firstname,_middlename,_lastname,_sex,_email,_phoneNumber, {
          from: App.account,
          gas: 500000 // Gas limit
        })
      }).then(function(result)
      {  regLoading.hide();
       // console.log(result);
        //alert success here
        alert("Registration successfull");
        location.reload(true);
      }).catch((error)=>
      {  regLoading.hide();
       //alert failure here
       alert("Registration not successfull");
      })

    }
    else
    {
      alert("Fill form properly before submitting");
    }
   
  },
 editInfo: function()
  {//editLoading
    let _Firstname = $('#edit_Firstname').val();
     let _middlename = $('#edit_middlename').val();
    let _lastname = $('#edit_lastname').val();
    let _sex = $('#edit_sex').val();
    let _email = $('#edit_email').val();
    let _phoneNumber = $('#edit_phoneNumber').val();

    if((_Firstname != "") && (_middlename != "") && (_lastname != "") && (_sex != "") && (_email != "") && (_phoneNumber != ""))
    {
      //show loading for UX
      let editLoading = $("#editLoading");
      editLoading.show();

    App.contracts.SavingsBank.deployed().then(function(instance) {
   
      return instance.editRegisteredUser(App.account,_Firstname,_middlename,_lastname,_sex,_email,_phoneNumber ,{
        from: App.account,
        gas: 500000 // Gas limit
      })
    }).then(function(result)
    {
      //hide loading
      editLoading.hide();
      //console.log(result);
      alert("Bio data updated successfully!");
    //  $('#formEdit').trigger('reset');
      location.reload(true);
    }).catch((error)=>
    { //hide loading
      editLoading.hide();
      alert("Bio data not updated successfully!");
    })

  }
  else
  {
    alert("Fill form properly before submitting");
  }

  }


    }

$(function() {
  $(window).load(function() {
    App.init();
   
  })
});
