# Scaffold Versions

We support different scaffold versions.

Versions available:

* V1
* V2

Function permissions:

* Developer - the function can only be called by developer address, the owner of Scaffold. Set when contract is contract created.
* All - everyone can call function.

## Scaffold V1:

### Added
Function | Description | Permissions | Input | Output
--------- | ---------- | ----------- | ----- | -----
payDeveloper | - Payments for a Scaffold at a price specified by the developer. The contract accepts only the exact Scaffold amount. When successful payment is made, Scaffold withdraw corresponding funds to a developer, shareholders, if exist, and fee to the platform. Corresponding events are also created | all | custom Scaffold parameters, witch set developer when create contract | no output
addShareHolder | - Allows developer to add shareholders. Share will be paid when a customer pays the Scaffold. Event is also created. | developer | shareholder address, share in percents | no output
editShareHolder | - Edit existing shareholder's share. Event is also created. | developer | shareholder address, new share in percents | no output
deleteShareHolder | - Delete existing shareholder. Event is also created. | developer | shareholder address | no output
getScaffoldSummary | - Get current state of Scaffold. Returns main Scaffold variables. | all | no input | fiat amount, fiat currency, scaffold amount, scaffold transaction index, developer address, OPEN token balance
deactivate | - Deactivate Scaffold contract. Contract withdraw all OPEN tokens to developer address. Customers can not pay for Scaffold until activate contract again. Managing shareholders developer can in any status. Deactivating event is also created. | developer | no input | no output

## Scaffold V2:

### Added
Function | Description| Permissions | Input | Output
-------- | ---------- | ----------- | ----- | -----
activate | - Set Scaffold to active mode for allowing payments for contract. Need transfer 10 OPEN tokens to contract for activating. Activation flag is present in Scaffold summary. Also activating event is created. | developer | no input | no output

### Changed
Function | Description| Permissions | Input | Output
-------- | ---------- | ----------- | ----- | -----
getScaffoldSummary | - An activation flag has been added to display the current status of the contract. | all | no input | fiat amount, fiat currency, scaffold amount, scaffold transaction index, developer address, OPEN token balance, activated
