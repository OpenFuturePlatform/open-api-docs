# OPEN User Guide

### [Download PDF](/pdf/open_chain_user_guide.pdf)

***
  
## OPEN Chain Explorer

OPEN Chain Explorer is a web application that allows viewing OPEN Chain status and statistics. Chain explorer can be found at
[http://explorer.openfuture.io/](http://explorer.openfuture.io/).

![Explorer Openfuture](/images/explorer-openfuture.png "Explorer Openfuture")

Below you can see the description of each field on Explorer page:

- Nodes — number of active nodes in the network
 - Blocks — number of blocks generated by the network
- All Transactions — total number of transactions in the network
- Block Production — average block creation velocity in the network
- Transactions Rate — average transactions number per second in the network
- Epoch — number of current epoch
- Current Epoch Duration — time elapsed since current epoch start
- Delegates — number of active delegates producing blocks
- Latest Blocks List — list of latest blocks created in the network
- Latest Transfer Transactions — list of latest transfer transactions in the network
- Latest Genesis Blocks — list of latest genesis blocs in the network
- Active Delegates — list of active delegates in the current epoch
- Block Information
  - block height 
  - block's merkle hash 
  - previous block's hash 
  - block's hash 
  - date
  - epoch 
  - transactions 
  - created by 
  - signature
 - Genesis Block Information
   - block height 
   - previous block's hash 
   - block's hash 
   - date
   - epoch 
   - delegates
- Active Delegate Information
  - address
  - public key

  
## OPEN Chain Wallet

OPEN Chain Wallet is a web application that allows interacting with the OPEN Chain (create wallet, transfer and receive OPEN tokens, delegating as an active delegate candidate and voting for active delegate candidates

## OPEN Wallet Start Page

To access OPEN wallet go to localhost:8080 after running the OPEN node

![OPEN Wallet Start Page](/images/open-wallet-start-page.png "OPEN Wallet Start Page")

Press “ENTER” to go to login options

![Select Type of Login](/images/select-type-of-login.png "Select Type of Login")

Following options available to log in OPEN Wallet:

(1) Create a new wallet

(2) Enter the wallet using the wallet’s private key

(3) Enter the wallet using the wallet’s file

(4) Restore the wallet using the wallet’s seed phrase

## Creating New OPEN Wallet

To create a new OPEN Wallet select “CREATE NEW WALLET” option at Start Page

![Generate Seed Phrase](/images/generate-seed-phrase.png "Generate Seed Phrase")

If you are not familiar with the seed phrase conception press (1) “What is Seed Phrase” to read more about it

Press (2) “Read” to read Seed Phrase disclaimer text

Press (3) “Generate” to generate a seed phrase for your wallet

![Seed Phrase Export](/images/seed-phrase-export.png "Seed Phrase Export")

After seed phrase generation you can see your seed phrase (1), copy it to the clipboard (2) or export it to a .txt file to save it on your computer (4). Please read disclaimer text (3) before proceeding to the next step. You are required to press “EXPORT.txt” (4) before confirming the seed phrase, but can not save the file.

![Seed Phrase Confirm](/images/seed-phrase-confirm.png "Seed Phrase Confirm")

Press (1) “CONFIRM” when you have securely stored the seed phase and ready to finish wallet creation. Once you press (1) “CONFIRM” you will be redirected to a wallet data page.

![Wallet Data](/images/wallet-data.png "Wallet Data")

On the wallet data page, you can see

(1) Wallet’s private key

(2) Wallet’s public key

(3) Wallet’s address

(4) Copy this information to the clipboard

(5) Read more about public key

(6) Read more about wallet address

Once you reviewed wallet data information press (7) “CONFIRM” to proceed to a wallet file creation.

![Create Password](/images/create-password.png "Create Password")

At this step, you will be asked to create a password to protect the wallet data file. Enter file password to “Create password” field (1). Press the “show password” button (2) to see the password you’ve entered.

![Create Password Done](/images/create-password-done.png "Create Password Done")

Press (1) “DONE” to complete the wallet creation and download the wallet data file to your computer.

![Wallet Registration Complete](/images/wallet-registration-complete.png "Wallet Registration Complete")

## Login to OPEN Wallet Using Private Key

![Enter Private Key](/images/enter-private-key.png "Enter Private Key")

To log in to OPEN wallet using a private key enter your wallet’s private key to the “PRIVATE KEY” field (1). Press the “show key” button (2) to see the private key you’ve entered.

![Enter Private Key Confirm](/images/enter-private-key-confirm.png "Enter Private Key Confirm")

Press the “show key” button (1) to see the private key you’ve entered. Press (2) “CONFIRM” to access your wallet’s dashboard.

## Login to OPEN Wallet Using Wallet Data File

![Upload File](/images/upload-file.png "Upload File")

Press (1) “SELECT FILE” to select the wallet data file path and upload it to the wallet page.

![Upload File Confirm](/images/upload-file-confirm.png "Upload File Confirm")

Enter wallet data file password to “ENTER PASSWORD” field. Press the “show password” button (1) to see the password you’ve entered. Press (2) “CONFIRM” to access your wallet’s dashboard.

## Restoring OPEN Wallet Using Seed Phrase

![Restore Wallet](/images/restore-wallet.png "Restore Wallet")

Enter your wallet’s seed phrase to restore the wallet in “ENTER SEED PHRASE” field and press (1) “CONFIRM”. Once you press (1) “CONFIRM” you will be redirected to a wallet data page.

![Wallet Data](/images/wallet-data.png "Wallet Data")

On the wallet data page, you can see

(1) Wallet’s private key

(2) Wallet’s public key

(3) Wallet’s address

(4) Copy this information to the clipboard

(5) Read more about public key

(6) Read more about wallet address

Once you reviewed wallet data information press (7) “CONFIRM” to proceed to a wallet file creation.

![Create Password](/images/create-password.png "Create Password")

At this step, you will be asked to create a password to protect the wallet data file. Enter file password to “create password” field (1). Press the “show password” button (2) to see the password you’ve entered.

![Create Password Done](/images/create-password-done.png "Create Password Done")

Press (1) “DONE” to complete the wallet restoration and download the wallet data file to your computer.

## Wallet Dashboard

![Wallet Dashboard](/images/wallet-dashboard.png "Wallet Dashboard")

After log in to OPEN Wallet you will see the Wallet dashboard that contains following:

1. Dashboard menu section
2. Wallet menu section

(3) Delegates menu section

(4) Log out button

(5) Wallet info section

(6) Last transactions section

(7) Wallet balance

(8) Wallet address

(9) Copy to the clipboard option

(10) Create transaction

(11) View all transactions

(12) Delegates section and vote button

(13) View all delegates

## Transactions Table

![Transactions Table](/images/transactions-table.png "Transactions Table")

(1) Blue-coloured hash - transaction is executed successfully 

(2) Red-coloured hash - transaction failed, transaction may fail in case the lack of sum necessary for the contract execution

(3) If transaction is intended for the contract execution, “Contract x” (where x - is the contract address) will be displayed in the field “Contract’

(4) If the transaction is intended for the contract deploy, “Smart Contract Deploy” will be displayed in the field “TO”

## Wallet Menu

![Wallet Menu](/images/wallet-menu.png "Wallet Menu")

Wallet menu contains the following blocks:

(1) Create transaction menu

(2) Last transactions menu

## Creating Transaction

![Create Transaction](/images/create-transaction.png "Create Transaction")

To create a transaction use “CREATE TRANSACTION” menu where

(1)Sender address (filled automatically with wallets address)

(2) Recipient address

(3) Transaction data

(4) Estimate Button

(5) Transfer amount

(6) Transaction fee amount

(7) Confirmation Button

Estimate Button (4):
is activated only when the data is entered (when we are working with the smart contract)
while pushing the button the minimal sum necessary for the contract deploy/contract execution is displayed in the field “FEE” (6) (more sources can be transferred for the contract execution, and the exchange will be returned to User)

Press (6) “CONFIRM” to proceed to transaction confirmation

![Confirm Transaction](/images/confirm-transaction.png "Confirm Transaction")

Review the transaction information and press (1) “CONFIRM” to confirm the transaction or (2) “CANCEL” to cancel the transaction.

![Transaction Sent](/images/transaction-sent.png "Transaction Sent")

Once the transaction is confirmed it will be sent to the OPEN Chain.
 
While clicking Confirmation Button (7) User will be able to see the whole transaction info the results.

In case transaction is executed successfully the following info is displayed in User’s Wallet.

![Transaction Info](/images/transaction-info.png "Transaction Info")

In case transaction failed the following information is displayed in User’s Wallet:

![Transaction Failed](/images/transaction-failed.png "Transaction Failed")

## Transaction Types

- Money Transferring (in this case the field “DATA” is not used)

![Money Transferring 1](/images/money-transfering-1.png "Money Transfering 1")

![Money Transferring 2](/images/money-transfering-2.png "Money Transfering 2")

- Contract Deploy (the field “TO” is empty, the field “DATA” is the byte code of the contract, “FEE” is the sum of money necessary for the deploy)

![Contract Deploy 1](/images/contract-deploy-1.png "Contract Deploy 1")

![Contract Deploy 2](/images/contract-deploy-2.png "Contract Deploy 2")

- Contract Execution (the field “TO” - the contract address, “DATA” - the name of contract method, “FEE” - the sum of money necessary for method execution, “AMOUNT” - the internal resources of contract: for example, they can be used for transferring money from the contract code)

![Contract Execution 1](/images/contract-execution-1.png "Contract Execution 1")

![Contract Execution 2](/images/contract-execution-2.png "Contract Execution 2")

## Delegates Menu

![Delegates Menu](/images/delegates-menu.png "Delegates Menu")

In the delegates menu you can find:

(1) Vote and Delegate section

(2) Delegates section

(3) Vote for a delegate tab

(4) Becoming a delegate tab

(5) All delegates tab

(6) Your votes tab

On the main screen of Delegate Menu User is able to see the green sign “Your vote” which is reflected in the string with the delegate selected by User. 

![Your Vote](/images/your-vote.png "Your Vote")

The button “Recall” allows User to recall his voice in case he is not sure about his choice on the delegate selected.

![Recall Button](/images/recall-button.png "Recall Button")

After pushing the button “Recall Vote” the pop-up window “Recall Vote” appears on User’s screen with the delegate’s address and amount of fee.

![Recall Vote Screen](/images/recall-vote-screen.png "Recall Vote Screen")

After the vote is successfully recalled by system the pop-up window “Recall vote sent successfully” appears on User’s screen.

![Recall Vote PopUp](/images/recall-vote-popup.png "Recall Vote PopUp")

## Delegating Node

Go to Becoming a delegate tab to nominate your node for active delegate

![Become Delegate](/images/become-delegate.png "Become Delegate")

To nominate your node review following information:

(1) Your node network ID

(2) Delegation fee amount (flat fee)

(3) Transaction fee (flat fee)

Press (4) “CONFIRM” to confirm your node delegation for active delegate.

![Become Delegate Confirm](/images/become-delegate-confirm.png "Become Delegate Confirm")

Review the transaction information and press (1) “CONFIRM” to confirm the transaction or (2) “CANCEL” to cancel the transaction.

![Transaction Sent](/images/transaction-sent.png "Transaction Sent")

Once the transaction is confirmed it will be sent to the OPEN Chain.

## Voting

Go to the Vote tab to vote for a node you want to become an active delegate

![Vote Screen](/images/vote-screen.png "Vote Screen")

Enter the node’s network ID to the “DELEGATE KEY” field, review transaction fee (flat fee) and press (3) “CONFIRM” to confirm your vote.

![Vote Confirm](/images/vote-confirm.png "Vote Confirm")

Review the transaction information and press (1) “CONFIRM” to confirm the transaction or (2) “CANCEL” to cancel the transaction.

![Transaction Sent](/images/transaction-sent.png "Transaction Sent")

Once the transaction is confirmed it will be sent to the OPEN Chain.

To view your votes go to Casted vote tab.

![Casted Vote Tab](/images/casted-vote-tab.png "Casted Vote Tab")

You can recall previously casted vote by pressing (1) “RECALL” button. 

![Pending](/images/pending.png "Pending")

For the time of recall transaction confirmation recall button will be changed to “PENDING” and your vote will disappear from this section once it will be confirmed by the OPEN Chain network.





