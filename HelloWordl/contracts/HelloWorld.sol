// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    event Greet(string message);

    function sayHello(string memory _name) public returns (string memory){
        string memory greeting=string(abi.encodePacked("Hello,",_name));
        emit Greet(greeting);
        return greeting;
    }
}