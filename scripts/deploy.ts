import { ethers } from "hardhat";

const ETHERNAUT_ADDRESS = "";

async function main() {
  // Get Address on the private key
  const deployers = await ethers.getSigners();
  console.log("Deployer address is", deployers[0].address);

  // Change the owner of Ethernaut contract
  const ChangeOwner = await ethers.getContractFactory("ChangeOwner");
  const changeOwner = await ChangeOwner.deploy(ETHERNAUT_ADDRESS, deployers[0].address, { gasLimit: 1000000 });
  console.log("Deploy ChangeOwner contract at", changeOwner.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
