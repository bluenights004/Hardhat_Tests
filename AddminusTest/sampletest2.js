// import testing libraries: https://www.chaijs.com/guide/styles/ 
const {expect} = require("chai");
const {ethers} = require("hardhat");

// the `describe` scope encapsulates an entire test called `Greeter`
// the `it` says the behavior that should be expected from the test
describe("Greeter", function () {
    let contract;
    let owner;

    this.beforeEach(async function() {

        // this line creates an ethers ContractFactory abstraction: https://docs.ethers.org/v5/api/contract/contract-factory/
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Greeter.deploy("Good morning PH!");
        contract = await greeter.deployed();
        [owner] = await ethers.getSigners();

    });

    it("Should add two numbers together and return the sum", async function() {

        const addNumbers = await contract.add(1, 1);
        expect(addNumbers).to.equal(2);

    });
   
    it("Should subtract two numbers together and return the difference", async function() {

        const minusNumbers = await contract.subtract(1, 1);
        expect(minusNumbers).to.equal(0);

    });
});