pragma solidity >=0.4.21 <0.6.0;

import "../open_zepplin_contracts/math/SafeMath.sol";

/*
*CONTRACT NAME: ETH SAVINGS SMART CONTRACT
*
*SOFTWARE DEVELOPER: MOFEHINTOLU O. MUMUNI
*
*EMAIL: hello@mofehintolmumuni.com | mofehintolumumuni@gmail.com
*
*GITHUB: www.github.com/Mofehintolu-mumuni
*
*/

  contract eth_savings_bank 
    {
     using SafeMath for uint256;
    //set admin address
    address payable public admin;

  struct BioData
    {
      string FirstName;
      string MiddleName;
      string LastName;
      string Sex;
      string Email;
      string PhoneNumber;
    }

    struct userDetails
    {
      uint id;
      address userAddress;
      mapping(address => BioData) userBioDetails;
    }

    uint private userId;

//keep track of user details
   mapping(address => userDetails) CompleteDetails;

//keep track of ETH value saved by each user
 mapping(address => uint256) userSavingsBalance;

  //keep track of all registered users
   address[] private registeredUsers;

  //keep track of total amount saved
   uint256 totalAmountDeposited;
   
   //keep track of total amount withdrawn
   uint256 totalAmountWithdrawn;

//log users savings
  mapping(address => uint256) TotalSavings;

//log users withdrawals
  mapping(address => uint256) TotalWithdrawals;
 
    constructor(string memory _Firstname,
    string memory _middlename,string memory _lastname,
    string memory _sex,string memory _email,
    string memory _phoneNumber)
    public 
    payable{
    admin = msg.sender;
     
   address RegAddress = admin;

   string memory firstname = _Firstname;
   string memory middlename = _middlename;
   string memory lastname = _lastname;
   string memory sex = _sex;
   string memory email = _email;
   string memory phoneNumber = _phoneNumber;

  userId++;

  uint regID = userId;

//userDetails storage newUserInfoStruct = userDetails(regID,RegAddress);

 CompleteDetails[RegAddress] = userDetails(regID,RegAddress);

CompleteDetails[RegAddress].id = regID;

CompleteDetails[RegAddress].userAddress = RegAddress;

CompleteDetails[RegAddress].userBioDetails[RegAddress] = BioData({FirstName: firstname, 
   MiddleName: middlename,
   LastName: lastname,
   Sex:sex,
   Email:email,
   PhoneNumber: phoneNumber}
   );
    
     registeredUsers.push(admin);

    //keep track of ETH value saved by each user
    userSavingsBalance[admin] = 0;

    //log users savings
    TotalSavings[admin] = 0;

    //log users withdrawals
    TotalWithdrawals[admin] = 0;
    }


//check value sent
    modifier checkSentValue()
    {
        require(msg.value > 0, "sent value cannot be zero");
        _;
    }

//check for non-zero or invalid address
    modifier preventZeroAddress()
    {
      require(address(msg.sender) != address(0), "Address sent is invalid");
      _;
    }

//check address belongs to admin
     modifier checkAdmin()
    {
      require(address(msg.sender) == address(admin), "Address does not belong to Admin");
      _;
    }
    
    event registered(
    address indexed _user
    );

    event edited(
    address indexed _user
    ); 

    event WithdrawSuccessful(
    address indexed _user,
    uint256 AmountWithdrawn
    );

    event DepositSuccessful(
    address indexed _user,
    uint256 AmountDeposited
    );
  
//check if user details is on the contract storage
   function checkIfUserIsRegistered(address _userAddress)internal view returns(bool)
    {
   address[] memory regUsers = registeredUsers;
    //get array length
    uint arrayLength = regUsers.length;
    //run forloop
    for(uint i = 0; i < arrayLength; i++)
    {
     if(regUsers[i] == _userAddress)
     {
      return true;
     }
     else
     {
       if(i == (arrayLength.sub(1)))
       {
          if(regUsers[i] == _userAddress)
          {
            return true;
          }
          else
          {
            return false;
          }
       }
     }
    }
   }

  //deposit funds to ETH savings
    function DepositFunds(uint256 amount)public checkSentValue payable returns(bool)
    {
      //prevent zero address
      require(address(msg.sender) != address(0), "Address sent is invalid");
      //check if sent value is same as amount
     require(msg.value == amount,"Sent value is not same as amount");
     //check if user has balance
       // require(address(msg.sender).balance >= msg.value, "Insufficient funds");

       //declare a local variable to store msg.sender
      address _userAddress = msg.sender;
     //declare a local variable to store amount sent
      uint256 _amount = amount;

        //check savers array struct for msg.sender
        bool userRegStatus = checkIfUserIsRegistered( _userAddress);

        if(userRegStatus)
        {
        //send savings funds to storage
        address(this).transfer(msg.value);

        TotalSavings[_userAddress] = TotalSavings[_userAddress].add(_amount);

        userSavingsBalance[_userAddress] = userSavingsBalance[_userAddress].add(_amount);

        totalAmountDeposited = totalAmountDeposited.add(_amount);
      
        emit DepositSuccessful(msg.sender,_amount);
        return true;
        }
        else
        {
          return false;
        }
        }
  
    //check amount in savings using address
    function getAmountInSavings (address _addy)public view  returns(uint256)
    {
  require(address(_addy) != address(0), "Address sent is invalid");
    uint256 balance = userSavingsBalance[_addy];
    return balance;
    }

//withdraw funds from ETH savings
    function WithdrawFunds(uint256 _value)public  payable  preventZeroAddress returns(bool)
    {
      uint256 _amount = _value;
         //declare a local variable to store msg.sender
      address _userAddress = msg.sender;
   //check savers array struct for msg.sender
        bool userRegStatus = checkIfUserIsRegistered( _userAddress);

        if(userRegStatus)
        {
           //check if amount to withdraw is feasible
      require(userSavingsBalance[_userAddress] >= _amount,"Insufficient funds in savings balance");
       //log users withdrawals

        TotalWithdrawals[_userAddress] = TotalWithdrawals[_userAddress].add(_amount);

        userSavingsBalance[_userAddress] = userSavingsBalance[_userAddress].sub(_amount);

        totalAmountWithdrawn = totalAmountWithdrawn.add(_amount);
      
      //transfer funds
            address(this).balance.sub(_value);
            msg.sender.transfer(_value);
     
       
         emit WithdrawSuccessful(msg.sender,_amount);
        return true;
        }
        else
        {
          return false;
        }
    }


//get user info and return struct values
    function GetUserInfo(address _user)
    public view 
    returns(string memory _firstname,string memory _middlename,string memory _lastname,string memory _sex,string memory _email,string memory _phone)
    {
    require(address(_user) != address(0), "Address sent is invalid");
    require(msg.sender == _user, "Address missmatch");
   
   //check regusers array struct for msg.sender
   bool userRegStatus = checkIfUserIsRegistered( _user);

   if(userRegStatus)
   {
 userDetails storage newUserDetailsStruct = CompleteDetails[_user];
 BioData storage newUserBioDataStruct = newUserDetailsStruct.userBioDetails[_user];

    _firstname = newUserBioDataStruct.FirstName;
    _middlename = newUserBioDataStruct.MiddleName;
    _lastname = newUserBioDataStruct.LastName;
    _sex = newUserBioDataStruct.Sex;
    _email = newUserBioDataStruct.Email;
    _phone = newUserBioDataStruct.PhoneNumber;
    return(_firstname,_middlename,_lastname,_sex,_email,_phone);
   }
   else
   {
     _firstname = "NULL";
    _middlename = "NULL";
    _lastname = "NULL";
    _sex = "NULL";
    _email = "NULL";
    _phone = "NULL";
     return(_firstname,_middlename,_lastname,_sex,_email,_phone);
   }
    }
 
 //check contract ETH balance
function checkContractBalance() public view returns (uint256)
{ 
  uint256 SavingBalance = address(this).balance;  
  return SavingBalance;
}

//check and returns the total ETH saved by users
function getTotalAmountSaved(address _user) public view returns (uint256)
{
require(address(_user) != address(0), "Address sent is invalid");
address RegAddress = _user;

//check regusers array struct for msg.sender
   bool userRegStatus = checkIfUserIsRegistered( RegAddress);

   if(userRegStatus)
   {
    uint256 totalSaved = TotalSavings[RegAddress];
    return totalSaved;
   }
   else
   {
    return 0;
   }
}


//check and returns the total ETH withdrawn by users
function getTotalAmountWithdrawn(address _user) public view returns (uint256)
{
require(address(_user) != address(0), "Address sent is invalid");
address RegAddress = _user;

//check regusers array struct for msg.sender
   bool userRegStatus =  checkIfUserIsRegistered( RegAddress);

   if(userRegStatus)
   {
     uint256 totalWithdraws = TotalWithdrawals[RegAddress];
 return totalWithdraws;
   }
   else
   {
    return 0;
   }
}

//getTotalWithdraws by all users
function getTotalWithdraws()public view checkAdmin returns(uint256)
{
 uint256 allUserWithdrawals = totalAmountWithdrawn;
 return allUserWithdrawals;
}

//getTotalDeposits by all users
function getTotalDeposits()public view checkAdmin returns(uint256)
{
  uint256 allUserDeposits = totalAmountDeposited;
 return allUserDeposits;
}


function getTotalUsers()public view returns(uint256)
{
 uint256 TotalRegisteredUsers = registeredUsers.length;
 return TotalRegisteredUsers;
}


 function registerUser(address newUser,string memory _Firstname,string memory _middlename,string memory _lastname,string memory _sex,string memory _email,string memory _phoneNumber)
 public
 preventZeroAddress
  returns(bool)
    {
   require(msg.sender == newUser,"User address missmatch");

  address RegAddress = newUser;

   bool checkUserRegStatus = checkIfUserIsRegistered( RegAddress);

   if(checkUserRegStatus)
   {
   
     return false;
   }
   else
   {
    string memory firstname = _Firstname;
   string memory middlename = _middlename;
   string memory lastname = _lastname;
   string memory sex = _sex;
   string memory email = _email;
   string memory phoneNumber = _phoneNumber;

  userId++;
  uint regID = userId;

//userDetails storage newUserInfoStruct = userDetails(regID,RegAddress);
 CompleteDetails[RegAddress] = userDetails(regID,RegAddress);
CompleteDetails[RegAddress].id = regID;
CompleteDetails[RegAddress].userAddress = RegAddress;
CompleteDetails[RegAddress].userBioDetails[RegAddress] = BioData({FirstName: firstname, 
   MiddleName: middlename,
   LastName: lastname,
   Sex:sex,
   Email:email,
   PhoneNumber: phoneNumber}
   );

//register user details on other mappings
//keep track of ETH value saved by each user
userSavingsBalance[RegAddress] = 0;

//log users savings
TotalSavings[RegAddress] = 0;

//log users withdrawals
  TotalWithdrawals[RegAddress] = 0;

    //keep track of all registered users
registeredUsers.push(RegAddress);

  //check regusers array struct for msg.sender
   bool userRegStatus = checkIfUserIsRegistered( RegAddress);

   if(userRegStatus)
   {
     emit registered(RegAddress);

     return true;
   }
   else
   {
     return false;
   }
   }

  
    }


function editRegisteredUser(address newUser,string memory _Firstname,string memory _middlename,string memory _lastname,string memory _sex,string memory _email,string memory _phoneNumber)
 public
 preventZeroAddress
  returns(bool)
    {
  address RegAddress = newUser;

require(msg.sender == newUser,"User address missmatch");

 //check regusers array struct for msg.sender
   bool userRegStatus = checkIfUserIsRegistered( RegAddress);

   if(userRegStatus)
   {
     //get user details
 userDetails storage newUserDetailsStruct = CompleteDetails[RegAddress];
 
 BioData storage newUserBioDataStruct = newUserDetailsStruct.userBioDetails[RegAddress];

newUserBioDataStruct.FirstName = _Firstname;
 newUserBioDataStruct.MiddleName = _middlename;
 newUserBioDataStruct.LastName = _lastname;
 newUserBioDataStruct.Sex = _sex;
 newUserBioDataStruct.Email = _email;
 newUserBioDataStruct.PhoneNumber = _phoneNumber;

 emit edited(RegAddress);
     return true;
   }
   else
   {
     return false;
   }
    }

//fallback function
function() external payable{}

 }
 