const eth_savings_contract = artifacts.require("../contracts/savings_contracts/eth_savings_bank");

module.exports = function(deployer) {
    deployer.deploy(eth_savings_contract,'Mofehintolu','Olusolape','Mumuni','Male','mofehintolumumuni@gmail.com','+2348171287113');
};
