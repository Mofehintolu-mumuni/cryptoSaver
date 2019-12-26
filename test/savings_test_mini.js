const savings = artifacts.require("../contracts/savings_contracts/eth_savings_bank_mini.sol");

contract('savings',(accounts) => 
{
var contractInstance;

it('deposits funds into savings', () => 
{
return savings.deployed().then((instance) => 
{
    contractInstance = instance;
    return contractInstance.DepositFunds.call(web3.utils.toWei('10', 'ether'),{ from: accounts[0] , value: web3.utils.toWei('10', 'ether')})
}).then((result) => 
{
    assert.equal(result,true,"correct value not read from contract eth balance");
});


});


it('gets amount in savings', () => 
{
return savings.deployed().then((instance) => 
{
    contractInstance = instance;
    return contractInstance.getAmountInSavings(accounts[0])
}).then((result) => 
{
    assert.equal(result.toNumber(),0,"correct value not read from contract eth balance");
});
});

it('withdraws funds in savings', () => 
{
return savings.deployed().then((instance) => 
{
    contractInstance = instance;
    return contractInstance.WithdrawFunds.call(web3.utils.toWei('0', 'ether'),{from: accounts[0]})
}).then((result) => 
{
    assert.equal(result,true,"correct value not read from contract eth balance");
});
});


it('checks contract balance', () => 
{
return savings.deployed().then((instance) => 
{
    contractInstance = instance;
    return contractInstance.checkContractBalance({from: accounts[0]})
}).then((balance) => 
{
    assert.equal(balance.toNumber(),0,"correct value not read from contract eth balance");
});
});


it('gets total amount saved by address', () => 
{
return savings.deployed().then((instance) => 
{
    contractInstance = instance;
    return contractInstance.getTotalAmountSaved(accounts[0],{from:accounts[0]})
}).then((balance) => 
{
    assert.equal(balance.toNumber(),0,"correct value not read from contract eth balance");
});
});


it('gets total amount withdrawn by address', () => 
{
return savings.deployed().then((instance) => 
{
    contractInstance = instance;
    return contractInstance.getTotalAmountWithdrawn(accounts[0],{from:accounts[0]})
}).then((balance) => 
{
    assert.equal(balance.toNumber(),0,"correct value not read from contract eth balance");
});
});


    
it('gets total amount withdrawn by all users', () => 
{
return savings.deployed().then((instance) => 
{
    contractInstance = instance;
    return contractInstance.getTotalWithdraws({from:accounts[0]})
}).then((withdraws) => 
{
    assert.equal(withdraws.toNumber(),0,"correct value not read from contract eth balance");
});
});


it('gets total amount withdrawn by all users test transaction not sent by admin', () => 
{
return savings.deployed().then((instance) => 
{
    contractInstance = instance;
    return contractInstance.getTotalWithdraws({from:accounts[1]})
}).then(assert.fail).catch(function(error) {
    
    assert(error.message.indexOf('revert' >= 0), 'Address does not belong to Admin');
    
});
});


it('gets total amount deposited by all users', () => 
{
return savings.deployed().then((instance) => 
{
    contractInstance = instance;
    return contractInstance.getTotalDeposits({from:accounts[0]})
}).then((deposits) => 
{
    assert.equal(deposits.toNumber(),0,"correct value not read from contract eth balance");
});
});


it('gets total users', () => 
{
return savings.deployed().then((instance) => 
{
    contractInstance = instance;
    return contractInstance.getTotalUsers({from:accounts[0]})
}).then((users) => 
{
    assert.equal(users.toNumber(),1,"correct value not read from contract eth balance");
});
});






});