const hre = require('hardhat')

async function main() {
  const UniswapV3Factory = await hre.ethers.getContractFactory('UniswapV3Factory')

  const deployContract = await UniswapV3Factory.deploy()
  await deployContract.deployed()
  console.log('deployContract deployed to:', deployContract.address)

  await hre.run('verify:verify', {
    address: deployContract.address,
    constructorArguments: [],
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
