const Migrations = artifacts.require("../contracts/test_contracts/Migrations");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
