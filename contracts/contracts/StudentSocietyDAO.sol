// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./MyERC20.sol";

contract StudentSocietyDAO {
    uint32 public num = 0;

    struct Proposal {
        uint32 index;      // index of this proposal
        address proposer;  // who make this proposal
        uint256 startTime; // proposal start time
        uint256 duration;  // proposal duration
        uint32 voteup;
        uint32 votedown;
        bool due;
    }

    struct Voter {
        bool[100] votes;
    }

    Proposal[] public proposals;
    mapping(address => Voter)  voters;

    MyERC20 public myERC20;

    constructor() {
        myERC20 = new MyERC20("ZJUToken", "ZJUTokenSymbol");
    }

    function newProposal() public {
        proposals.push(Proposal({
            index: num,
            proposer: msg.sender,
            startTime: block.timestamp,
            duration: 20,
            voteup: 0,
            votedown: 0,
            due: false
        }));
        num++;
        myERC20.transferFrom(msg.sender, address(this), 3);
    }

    function vote(uint ind, uint atti) public {
        Voter storage sender = voters[msg.sender];
        require(!sender.votes[ind], "Already voted this proposal.");
        require(block.timestamp < proposals[ind].startTime + proposals[ind].duration, "This proposal is ended.");
        sender.votes[ind] = true;
        if (atti == 0) proposals[ind].voteup++;
            else proposals[ind].votedown++;
        myERC20.transferFrom(msg.sender, address(this), 2);
    }

    function voteEnd(uint ind) public {
        require(block.timestamp > proposals[ind].startTime + proposals[ind].duration, "This proposal is not ended.");
        proposals[ind].due = true;
        if (proposals[ind].voteup>proposals[ind].votedown)
            myERC20.transfer(msg.sender, 5);
    }

    function getData() view external returns (Proposal[] memory){
        return proposals;
    }
}
