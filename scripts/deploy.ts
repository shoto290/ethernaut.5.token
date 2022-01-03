import { ethers } from "hardhat";

const ETHERNAUT_ADDRESS = "";

async function main() {
  // Get Address on the private key
  const deployers = await ethers.getSigners();
  console.log("Deployer address is", deployers[0].address);

  // Send new token to the deployer
  const Sender = await ethers.getContractFactory("Sender");
  const sender = await Sender.deploy(ETHERNAUT_ADDRESS, deployers[0].address);
  console.log("Deploy Sender contract at", sender.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
