const { Web3 } = require('web3');
const fs = require('fs');
const path = require('path');

const web3 = new Web3('HTTP://127.0.0.1:7545');

const contractPath = path.resolve(__dirname, 'artifacts/contracts/HelloWorld.sol/HelloWorld.json');

const contractAddress = '0xFab219366e0d9dE769CB9Be7F27C4A27940Bf130';

const { abi, bytecode } = JSON.parse(fs.readFileSync(contractPath, 'utf-8'));

async function deploy() {
    const accounts = await web3.eth.getAccounts();

    console.log("Deploying the contract from : ", accounts[0]);

    const helloContract = new web3.eth.Contract(abi);

    const deployedContract = await helloContract
        .deploy({
            data: bytecode,
        }
        ).send(
            {
                from: accounts[0],
                gas: '1500000',
                gasPrice: '30000000000',
            }
        );
    console.log('Contract deployed to : ',deployedContract.options.address);
}
deploy();