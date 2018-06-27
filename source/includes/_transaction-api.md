# Transaction API

When performing any method of a smart contract Open Platform catches
the corresponding event.

> Events can be presented through the following JSONs:

## Events

```json
{
  "activated": false,
  "type": "ACTIVATED_SCAFFOLD"
}
```

### Activate scaffold event attributes:
Attribute | Type | Description
--------- | -------- |-----------
activated | Boolean | Activated or deactivated scaffold
type | [EventType](#event-types) | The type of event

```json
{
  "userAddress": "0x00000000000000000000000000000000",
  "partnerShare": 10,
  "type": "ADDED_SHARE_HOLDER"
}
```

### Added Share Holder event attributes:
Attribute | Type | Description
--------- | -------- |-----------
userAddress | String | The address of share holder
partnerShare | BigInteger | Share of profits
type | [EventType](#event-types) | The type of event

```json
{
  "userAddress": "0x00000000000000000000000000000000",
  "type": "DELETED_SHARE_HOLDER"
}
```

### Deleted Share Holder event attributes:
Attribute | Type | Description
--------- | -------- |-----------
userAddress | String | The address of share holder
type | [EventType](#event-types) | The type of event

```json
{
  "userAddress": "0x00000000000000000000000000000000",
  "partnerShare": 10,
  "type": "EDITED_SHARE_HOLDER"
}
```

### Edited Share Holder event attributes:
Attribute | Type | Description
--------- | -------- |-----------
userAddress | String | The address of share holder
partnerShare | BigInteger | Share of profits
type | [EventType](#event-types) | The type of event

```json
{
  "amount": 1000,
  "toAddress": "0x00000000000000000000000000000000",
  "type": "FUNDS_DEPOSITED"
}
```

### Funds Deposited event attributes:
Attribute | Type | Description
--------- | -------- |-----------
amount | BigInteger | The amount of money
toAddress | String | The address to
type | [EventType](#event-types) | The type of event

```json
{
  "userAddress": "0x00000000000000000000000000000000",
  "amount": 1000,
  "type": "PAYED_FOR_SHARE_HOLDER"
}
```

### Payed For Share Holder event attributes:
Attribute | Type | Description
--------- | -------- |-----------
userAddress | String | The address of share holder
amount | BigInteger | The amount of money
type | [EventType](#event-types) | The type of event

```json
{
  "customerAddress": "0x00000000000000000000000000000000",
  "transactionAmount": 10,
  "scaffoldTransactionIndex": 10,
  "properties": {
    "userId": 5,
    "type": "male"
  },
  "type": "PAYMENT_COMPLETED"
}
```

### Payment Completed event attributes:
Attribute | Type | Description
--------- | -------- |-----------
customerAddress | String | The address of customer
transactionAmount | BigInteger | The amount of money which customer puts
scaffoldTransactionIndex | BigInteger | The number of transaction
properties | MAP | The properties which customer created for scaffold
type | [EventType](#event-types) | The type of event

### Event types:
1. ACTIVATED_SCAFFOLD
2. ADDED_SHARE_HOLDER
3. EDITED_SHARE_HOLDER
4. DELETED_SHARE_HOLDER
5. FUNDS_DEPOSITED
6. PAYED_FOR_SHARE_HOLDER
7. PAYMENT_COMPLETED

## Get all transactions

> To get all transactions use this code:

```shell
curl "https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000/transactions"
  -H "Authorization: OPEN_KEY"
```

> Response:

```json
{
  "totalCount": 1,
  "list": [
    {
      "scaffold": {
        "address": "0x1c297f40beb075936d6dbe4b245b92736667ecb1",
        "user": {
          "id": 1,
          "credits": 0,
          "openKeys": [
            {
              "value": "op_pk_029bbb64-a31d-4ec6-b881-8d8db19c70ee",
              "enabled": true,
              "expiredDate": null
            }
          ]
        },
        "abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"dfsf\",\"type\":\"string\"}],\"name\":\"payVendor\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"vendorAddress\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"deactivate\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getScaffoldSummary\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"openScaffoldTransactions\",\"outputs\":[{\"name\":\"customerAddress\",\"type\":\"address\"},{\"name\":\"dfsf\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"fiatAmount\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"scaffoldDescription\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"OPENToken\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"scaffoldAmount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"scaffoldTransactionIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_vendorAddress\",\"type\":\"address\"},{\"name\":\"_description\",\"type\":\"string\"},{\"name\":\"_fiatAmount\",\"type\":\"string\"},{\"name\":\"_fiatCurrency\",\"type\":\"string\"},{\"name\":\"_scaffoldAmount\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"customerAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"transactionAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"scaffoldTransactionIndex\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"dfsf\",\"type\":\"string\"}],\"name\":\"paymentComplete\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"fundsDeposited\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"activated\",\"type\":\"bool\"}],\"name\":\"activatedScaffold\",\"type\":\"event\"}]",
        "developerAddress": "0xDc29484cc9C02Ee01015f33BcA8bBb5C7293Fb54",
        "description": "any_description",
        "fiatAmount": "123",
        "currency": "USD",
        "conversionAmount": "0.2139521163",
        "properties": [
          {
            "name": "property_name",
            "type": "STRING",
            "defaultValue": "property_value"
          }
        ],
        "enabled": false
      },
      "event": {
         "userAddress": "0x00000000000000000000000000000000",
         "amount": 1000,
         "type": "PAYED_FOR_SHARE_HOLDER"
      },
      "type": "type of transaction"
    }
  ]
}
```

The endpoint gets all transactions.

### HTTP Request

`GET https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000/transactions`

<aside class="notice">
Remember, the endpoint is <b>pageable</b>.
</aside>

### Response dto attributes:

Attribute | Type | Description
--------- | -------- |-----------
totalCount | Integer | The count of scaffolds
list | [TransactionDto](#transaction-dto-attributes)[] | The scaffold`s transactions

### Transaction dto attributes:
Attribute | Type | Description
--------- | -------- |-----------
scaffold | [ScaffoldDto](#scaffold-dto-attributes) | The user`s scaffold
event | [Event](#events) | The event which came with transaction
type | String | The type of transaction

