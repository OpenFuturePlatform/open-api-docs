# OPEN Chain White Paper

### [Download PDF](/pdf/open_chain_white_paper.pdf)

***

## TOC

- [Introduction](#introduction)
  - [Existing Concepts](#existing-concepts)        	
    - [Blockchains](#blockchains)	
    - [Forks](#forks)
    - [Smart Contracts](#smart-contracts)    	
  - [Consensus](#consensus)       	
    - [Proof of Work (PoW)](#proof-of-work) 
    - [Proof of Stake (PoS)](#proof-of-stake) 
    - [Delegated Proof of Stack (DPoS)](#delegated-proof-of-stack)	
    - [Byzantine Fault Tolerance (BFT)](#byzantine-fault-tolerance)  	
- [OPEN Chain](#open-chain)
  - [Accounts](#accounts)   	
    - [Wallet](#wallet)    	
      - [Keystore File](#keystore-file)  
    - [Node](#node)     	
    - [Smart Contract](#smart-contract)	
  - [Transactions](#transactions) 
    - [Receipts](#receipts)   
    - [States](#states)   	
  - [Consensus Algorithm](#consensus-algorithm)     	
  - [Blockchain](#blockchain)	
    - [Genesis Block](#genesis-block)  	
    - [Main Block](#main-block)

# Introduction

At the current moment, we can observe how the blockchain technology is changing the approaches to the development of business transaction software. Now practically all the industries are deeply interested in the implementation of the emerging technologies and are seeking opportunities to utilize its potential and capacities for translating into life their business ideas and increasing efficiency of their projects.
Today there is a plenty of various blockchain solutions but all of them are different and can’t be approached in the same way.
In this white paper, let us present you a new blockchain platform called OPEN Chain. Using all benefits of blockchain technology and JVM, it offers a wide range of solutions for various tasks. It includes numerous SDKs for integration of blockchain and provides a convenient way to create Smart contracts in all JVM languages.

## Existing Concepts

If you have decided to apply the benefits of blockchain technology to your project, there can be a lot of ways to do it. Given your individual requirements and peculiarities of your project, you can build your own public or private blockchain or to conduct a hard or soft fork on one of the existing ones to get the features that you need. Moreover, you can use Smart contracts to build decentralized applications (DApps) or to issue your own cryptocurrency based on the requirements of your project.

### Blockchains

Each blockchain is developed to solve different tasks and to satisfy different needs. The difference in their purposes determines the difference in their scalability limits, levels of anonymity, consensus protocols, transaction types, block sizes, etc. It is also important to mention that each blockchain always can be improved and upgraded in order to expand its capacities in task solving.

### Forks

When developers want to alter the rules and principles that are used for processing transactions or validating data and even when they want to update the consensus rules, they need to fork the blockchain. The ways and methods of forking may significantly differ due to a design architecture and use cases of each blockchain.
Nevertheless, the main notions are common.  If previous versions of the software are not compatible with newly introduced updates and changes (quite often these are changes in consensus algorithms), it means that a “hard fork” has been conducted. If an older version of the chain still operates with introduced updates, these changes are known as “soft forks”.

### Smart Contracts

Smart Contracts are aimed at facilitating various business processes and making them much more credible, reliable and trackable. Contracts of this type allow excluding a necessity to involve a third party into the process of contract negotiating or performing. It means that two parties have an opportunity to interact with each other directly, without an intermediary. 
Such transactions are irreversible and unalterable. Thanks to the capacities of blockchain, available APIs, and multiple blockchain-powered tools, they can be easily created and applied to your business activities.  Smart contracts are an integral part of such processes as building DApps, conducting ICOs and issuing tokens.

## Consensus

Consensus rules are a specific set of the most important rules that determine and regulate how the blockchain should function. These rules are used in Consensus algorithms to validate blocks and transaction. To achieve consensus it is necessary for all the nodes to have a common opinion and approaches to the way they should work.
One of the functions of the consensus protocol is to protect all participants of the network from undesired interference of third-party regulatory bodies.

### Proof of Work

Hypothetically, each member of the system has a chance to become a block builder at any time. This role presupposes participation in the security maintenance of the blockchain and getting rewards for the work performed. The probability of becoming a block builder is directly proportional to the computation power of the participant’s equipment.
A possibility to be rewarded is an incentive for a member to invest in more powerful hardware and electricity which is a power source for computers. All these expenses, that due to the increasing competition among the participants are only growing, make it absolutely unfeasible to try to enter this competition for those members who have some malicious purposes.
All the members can use their computation power to vote for the updates on the blockchain with the next block i. e. “Proof of Work is essentially one-CPU-one-vote”.

### Proof of Stake

Nevertheless, PoW is not cost-efficient due to the amount of computation power required and, consequently, the expenses on the energy needed. But there is an alternative approach which is called Proof of Stake. In this case, the probability to get a reward for maintaining the blockchain is proportional to the participant’s stake. To be rewarded, a maliciously acting participant needs to possess over 50% of the total stake. Only in this case, he will be able to promote his interests. It’s quite an unlikely scenario which means that PoS approach ensures a high level of security for the blockchain.
In the framework of this approach, the members vote for the updates on the blockchain with the next block based on their current stake, i.e. “Proof-of-stake is essentially  one-stake-unite-one-vote.”

### Delegated Proof of Stack
 
Delegated Proof of Stake (DPoS) is the fastest, most efficient, most decentralized, and most flexible consensus model available at the current moment. This model is based on the principle of using the power of stakeholder approval voting to resolve consensus issues which ensures a fair and democratic approach. Such parameters of the network as fee schedules, block intervals and transaction sizes can be tuned by elected delegates who need to disclose their identities and voice their readiness to maintain the work of the network.
As a result of a deterministic selection of block producers, transactions are confirmed in an average of just 1 second.
 
 
### Byzantine Fault Tolerance
 
When it comes to the distributed systems, Byzantine Fault Tolerance (BFT) refers to the ability of a distributed computer network to function as desired. Even if there are some nodes in the system that are failing or transferring incorrect information to other peers, either accidentally or purposely, the system will overcome failures and reach consensus.
 
# OPEN Chain

OPEN Chain is created to provide a convenient and flexible technology to develop blockchain solutions and decentralized applications.
The logic of OPEN Chain presupposes the existence of separate modules. Each of them can be substituted with another one to satisfy your individual requirements. This approach makes it possible to use OPEN Chain in a variety of different projects.
Your work with OPEN chain will be extremely convenient, as to modify the chain or expand it you can use any of the JVM languages.
The applied fast and efficient consensus protocol is much more energy-efficient than PoW and it needs less time to process transactions than both PoW and PoS. Moreover, the participants of the network do not need to have expensive specialized equipment; the power of a regular PC will be enough.
With OPEN Chain you will be able to create your own cryptocurrency or a distributed ledger, or to design any other blockchain-powered solution that will satisfy all your needs.
 
## Accounts
Accounts play a crucial role in OPEN Chain. There are three types of them: Wallet Account, Node Account and Smart Contract Account. To simplify, Wallet Accounts will be referred to as “wallets”, Node Accounts will be referred to as “nodes” and Smart Contract Accounts will be referred to as “contracts”.
This classification is based on the principle that all these entities represent themselves so-called state objects. The state for Wallet is their balance. Nodes have a role and votes. As for Contracts, they have their balance and contract codes. The state of all accounts is the state of the OPEN network which is updated with every block when consensus has been reached.

### Wallet
 
Wallets are essential for users to interact with OPEN Chain via transactions. They represent identities of external agents (e.g., individuals). To sign a transaction, wallets follow a public key cryptography scheme. It allows OPEN Chain to securely validate the identity of a transaction sender.

#### Keystore File       	
 
Every Wallet has a pair of keys: (a private key and a public key.  All wallets have their addresses that are determined by the first 20 bytes taken from their hashed public keys. Every private key/address pair is encoded in a keystore file which represents itself a JSON text file. It can be opened and viewed in any text editor.
The main component that is contained in any keystore file is a Wallet private key. To ensure safety of this data, it is always encrypted alongside the password that was entered by the user when the wallet was created. The keystore files are stored on a user side.
 
### Node
 
A Node represents an OPEN Chain client running instance. A person/organization can control more than one Node and a Node can be controlled by more than one person/organization. Each Node has its address that is determined by the first 20 bytes taken from the hashed public key.
There are three roles of nodes in OPEN Chain: Peer, Delegate and Active Delegate. A role is attributed to a Node in accordance with its degree of participation in reaching consensus.
A Peer is a Node with minimal influence in this process. These Nodes only ensure the creation of transactions.
A Delegate is a Peer bonded with a specific Wallet. Each Peer can be bonded with only one Wallet. But one Wallet can be bonded with a lot of Peers. Wallets can vote for delegates as well as recall their votes. Each Delegate has its rating which is calculated as a sum of the weights of votes in its favor.
Active Delegates are the top N Delegates by rating. Currently, the number of delegates in OPEN Chain is equal to 21. The decision to allow such a number of delegates was taken with a view to maximize the efficiency of the network and ensure the average block time of between 4 and 6 seconds. An initial Active Delegates list is defined in the first genesis block which is hardcoded.
Active Delegates have a right to validate transactions, run smart contracts as well as produce, validate and commit blocks. They get rewards for producing blocks.It means that they play the most crucial role in achieving a consensus.
  
### Smart Contract
 
A contract is a collection of code (its functions) and data (its state) which resides at a specific address on OPEN chain.
Contracts are stored on the blockchain in a Java bytecode. But the state of Smart Contract is stored separately in the binary representation. It allows skipping contract execution on nodes which are not Active Delegates, such a principle helps to increase the efficiency of the entire network.
The code of a smart contract is loaded and executed in a Java Virtual Machine (JVM). The usage of a JVM makes it possible to write contracts in any JVM language: Java, Clojure, Groovy, Kotlin, Scala etc.
Nevertheless, the number of classes and methods allowed to be used in smart contracts is limited to primitives, arrays, ArrayList, HashSet, HashMap and StrictMath.
Executing of a contract code is a part of the block validation process. It means that if a transaction is added into block B the code execution spawned by that transaction will be executed by all Active Delegates which have a right to validate block B. 
 
## Transactions

A transaction is a signed data package which stores a message to be sent.
 
Transactions contain:
 
- Header
  - Timestamp
  - Fee
  - Sender address
- Payload - depends on transaction type
- Footer
  - Hash
  - Signature
  - Public key
 
There are four transaction types: Delegate, Vote, Transfer and Reward. Their payload is the main criterion to explain their difference.
 
- Delegate Transaction Payload
  - Delegate address
  - Amount
- Vote Transaction Payload
  - Delegate address
  - Vote type
- Transfer Transaction Payload
  - Wallet address
  - Amount
- Reward Transaction Payload
  - Wallet address
  - Reward
 
OPEN Chain presupposes an individual approach to all payloads. Each of them is handled in its own way and pursuits specific aims.
The role of delegate payloads lies in the delegate announcement which includes bonding of a sender address with a delegate address. In this case, there is a fixed fee to be paid by a sender as a guarantee. 
Vote payloads ensure an opportunity for participants to give or to recall their votes.
Transfer payloads, which are the most wide-spread ones, allow users to transfer coins from one wallet to another one or to a smart contract.
With the help of reward payloads Active Delegates are paid for block producing. It’s important to note that only one reward transaction signed by a block producer is allowed per block.

### Receipts

A receipt is a result of transaction execution. Being stored in a respective block, receipts refer to transactions and contain data about transaction status and all changes that were introduced.
 
Receipt contains:
 
- Transaction hash
- Transaction status
- Set of transaction results
 
Transaction result contains:
 
- Sender address
- Receiver address
- Amount
- Data
 
Transaction result is similar to a transaction itself; the main difference is the fact that it is not signed. An ordinary transfer transaction has two main results. They are a coin transfer that is conducted between a sender and a receiver and a fee transfer that takes place between a sender and a block producer.

### States

Execution of transactions results in state transitions that are based on receipts. For each account, only one final state can be generated per block. While they are stored in a relevant block, the latest state should be considered to be the most up-to-date one.
 
Wallet state contains:
 
- Balance state
- Delegate address for whom he voted for
 
Node state contains:
 
- Node rating
 
Smart contract state contains:
 
- Smart contract balance
- Smart contract code

## Consensus Algorithm
 
OPEN Chain was implemented by cherry-picking the major strengths of DPoS and BFT. Thanks to the common features with DPoS, the influence of participants is proportional to their stake in the system. BFT principles let avoid chain forks and finalize transactions without a necessity to confirm them.
According to OPEN Chain Consensus rules, all stakeholders have a right to take a part in the Delegate election and each of them has one vote which they can give to a Delegate or recall.
The list of Active Delegates is formed in accordance with participants’ votes. As a result of voting, top N of Delegates become Active Delegates. Their exact number is determined in accordance with the requirements of security and efficiency. At the current moment, in OPEN chain N is equal to 21.
Active Delegates have their privileged role for one Epoch which lasts till N blocks are produced. This approach provides each Active delegate with an opportunity to produce a block. Malicious actions can be immediately detected and a delegate that has malicious purposes can be excluded from the systems.
There is a Time Slot for each Active Delegate to produce a block that should be validated by other Active Delegates. All of them should vote for or against the newly produced block. The block will be added to the chain if the majority of votes received are the votes for. The number of the votes for should be more than (2/3N + 1). After the decision is taken, there is some time for the network to synchronize.

![timeslot](/images/timeslot.svg)

## Blockchain
 
Though it may seem that OPEN Chain has very much in common with other blockchains, there are some essential differences that make it stands out from the row of others. One of the key differences is related to blockchain architecture. Open Chain has two types of blocks: Genesis and Main. And its blocks store such important data as a copy of a transaction list, receipt list and the most recent states.

![blockchain](/images/blockchain.svg)

### Genesis Block
 
The chain is labeled by Genesis blocks along the entire length. Main blocks are located between Genesis blocks, which mark a new Epoch. Each Genesis block acts as a sign of a new Epoch and sets network parameters for it. At the current moment, the network parameters include only a list of Active Delegates.
This type of blocks doesn't contain transactions and is produced by each Peer separately. When Genesis blocks have the same height throughout the whole network, it’s a proof of consensus mechanism stability.
 
Genesis block contains:
 
- Timestamp
- High
- Hash
- Previous block hash
- Epoch index
- List of active delegates
- Signature
- Public key

### Main Block
Main blocks contain a copy of the transaction list, the receipt list, and the recent states. Though this approach is considered to be inefficient due to the necessity to store all receipts and states, it ensures storage of all the aspects and peculiarities of the blockchain work. To address these gaps, it is planned to improve storing methods in the upcoming releases.
  
The main block contains:
 
- Timestamp
- High
- Hash
- Previous block hash
- Transactions
- Transfer transactions
- Reward transactions
- Delegate transactions
- Vote transactions
- States
- Delegate states
- Account states
- Receipts
- Transactions Merkle Root
- States Merkle Root
- Receipts Merkle Root
- Signature
- Public key
 
Block validation algorithm depends on the role of a node. The basic block validation process and participation of each node can be viewed in the table below.

| Check | Peer | Delegate | Active Delegate |
|:------|:----:|:--------:|:---------------:|
|Check if the previous block referenced exists and is valid|+|+|+|
|Check that the block is produced by the correct active delegate|+|+|+|
|Check that the timestamp of the block is in the correct time slot|+|+|+|
|Recalculate each transaction hash||+|+|
|Check each transaction sign||+|+|
|Smart Contract execution|||+|
|Check transactions Merkle root|+|+|+|
|Reproduce each receipt|||+|
|Check receipts Merkle root|+|+|+|
|Reproduce each state|||+|
|Check states Merkle root|+|+|+|
|Recalculate block hash||+|+|
|Check block signature|+|+|+|
