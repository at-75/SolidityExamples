const { Web3 } = require('web3');
const fs = require('fs');
const path = require('path');

const web3 = new Web3('http://localhost:7545');
const contractPath = path.resolve(__dirname, 'artifacts/contracts/HelloWorld.sol/HelloWorld.json');
const { abi } = JSON.parse(fs.readFileSync(contractPath, 'utf8'));
const contractAddress = '0x891166D10627F85204F7a61c6376afEE86eb6Ac6';
const helloContract = new web3.eth.Contract(abi, contractAddress);

async function test(){
    const accounts=await web3.eth.getAccounts();
    const name='Mark';
    const response = await helloContract.methods.sayHello(name).call({from : accounts[0]});
    console.log(response);
}
test();