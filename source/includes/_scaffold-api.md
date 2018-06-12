# Scaffold API

> A Scaffold can be presented through the following JSON:

```json
{
    "address": "0x1c297f40beb075936d6dbe4b245b92738867ecb1",
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
}
```

The primary means of interacting with the Scaffolds is through the OPEN Developer Dashboard, it is also possible to make changes using the OPEN Platform API.

### Scaffold dto attributes:

Attribute | Type | Description
--------- | -------- |-----------
address | String | The scaffold`s address
user | [UserDto](#user-dto-attributes)[] | The information about user
abi | String | The scafford`s interface
developerAddress | String | The address of developer`s wallet
description | String | The scaffold`s description
fiatAmount | String | The constant cost of scaffold
currency | String | The scaffold`s currency
conversionAmount | String | The dynamic cost of scaffold in Ethereum
properties | [ScaffoldPropertyDto](#scaffold-property-dto-attributes)[] | The scaffold`s properties
enabled | Boolean | The scaffold is activated or deactivated

### Scaffold property dto attributes:

Attribute | Type | Description
--------- | -------- |-----------
name | String | The property name
type | String | The property type: `[STRING, NUMBER, BOOLEN]`
defaultValue | String | The property value

## Get all scaffolds

> To get all scaffolds use this code:

```shell
curl "https://api.openfuture.io/api/scaffolds"
  -H "Authorization: OPEN_KEY"
```

> Response:

```json
{
    "totalCount": 1,
    "list": [
        {
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
        }
    ]
}
```

The endpoint gets all scaffolds.

### HTTP Request

`GET https://api.openfuture.io/api/scaffolds`

<aside class="notice">
Remember, the endpoint is <b>pageable</b>.
</aside>

### Response dto attributes:

Attribute | Type | Description
--------- | -------- |-----------
totalCount | Integer | The count of scaffolds
list | [ScaffoldDto](#scaffold-dto-attributes)[] | The user`s scaffolds

## Get scaffold

> To get scaffold use this code:

```shell
curl "https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000"
  -H "Authorization: OPEN_KEY"
```

> Response is presented like ScaffoldDto

The endpoint gets user`s scaffold.

### HTTP Request

`GET https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000`

<aside class="success">
Response is presented like <a href='#scaffold-dto-attributes'>ScaffoldDto</a>.
</aside>

## Compile scaffold

> To compile scaffold use this code:

```shell
curl "https://api.openfuture.io/api/scaffolds/doCompile"
  -X POST
  -H "Authorization: OPEN_KEY"
  -H "Content-Type: application/json"
  -d '{
        "openKey": "op_pk_029bbb64-a31d-4ec6-b881-8d8db19c70ee",
        "properties": [
            {
                "name": "property_name",
                "type": "STRING",
                "defaultValue": "property_value"
            }
        ]
    }'
```

> Response:

```json
{
    "abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"property_name\",\"type\":\"string\"}],\"name\":\"payVendor\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"vendorAddress\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"deactivate\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getScaffoldSummary\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"openScaffoldTransactions\",\"outputs\":[{\"name\":\"customerAddress\",\"type\":\"address\"},{\"name\":\"property_name\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"fiatAmount\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"scaffoldDescription\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"OPENToken\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"scaffoldAmount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"scaffoldTransactionIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_vendorAddress\",\"type\":\"address\"},{\"name\":\"_description\",\"type\":\"string\"},{\"name\":\"_fiatAmount\",\"type\":\"string\"},{\"name\":\"_fiatCurrency\",\"type\":\"string\"},{\"name\":\"_scaffoldAmount\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"customerAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"transactionAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"scaffoldTransactionIndex\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"property_name\",\"type\":\"string\"}],\"name\":\"paymentComplete\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"fundsDeposited\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"activated\",\"type\":\"bool\"}],\"name\":\"activatedScaffold\",\"type\":\"event\"}]",
    "bin": "6...604052306007600061fffffffffffffffffffff80838360005b838110156102045780820151818401526020810190506101e9565b50505050905090810190601f1680156102315780820380516001836020036101000a031916815260200191505b5084810383528a818151815260200191508051906020019080838360005b8381101561026a57808201518184015260208101905061024f565b50505050905090810190601f1680156102975780820380516001836020036101000a031916815260200191505b50848103825289818151815260200191508051906020019080838360005b838110156102d05780820151818401526020810190506102b5565b50505050905090810190601f1680156102fd5780820380516001836020036101000a031916815260200191505b509a505050505050505050505060405180910390f35b341561031e57600080fd5b6103346004808035906020019091905050610f4a565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018281038252838181546001816001161561010002031660029004815260200191508054600181600116156101000203166002900480156103ef5780601f106103c4576101008083540402835291602001916103ef565b820191906000526020600020905b8154815290600101906020018083116103d257829003601f168201915b5050935050505060405180910390f35b341561040a57600080fd5b610412610f9c565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610452578082015181840152602081019050610437565b50505050905090810190601f16801561047f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561049857600080fd5b6104a061103a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104e05780820151818401526020810190506104c5565b5050505090a81c09c91c7fffd70329d20d3908713c80029"
}
```

The endpoint compiles scaffold.

### HTTP Request

`POST https://api.openfuture.io/api/scaffolds/doCompile`

### Request attributes:

Attribute | Type | Description
--------- | -------- |-----------
openKey | String | The openKey`s value
properties | [ScaffoldPropertyDto](#scaffold-property-dto-attributes)[] | The scaffold`s properties

### Response attributes:

Attribute | Type | Description
--------- | -------- |-----------
abi | String | The scaffold`s interface
bin | String | The scaffold`s binary

## Deploy scaffold

> To deploy scaffold use this code:

```shell
curl "https://api.openfuture.io/api/scaffolds/doDeploy"
  -X POST
  -H "Authorization: OPEN_KEY"
  -H "Content-Type: application/json"
  -d '{
        "openKey": "op_pk_7395a0fa-d39f-4f52-ab08-d27cdc7b8472",
        "developerAddress": "0xDc29484cc9C02Ee01015f33BcA8bBb5C7293Fb54",
        "description": "any_description"
        "fiatAmount": "123",
        "currency": "USD",
        "conversionAmount": 0.2139521163,
        "properties": [
            {
              "name": "property_name",
              "type": "STRING",
              "defaultValue": "property_value"
            }
        ]
    }'
```

> Response is presented like ScaffoldDto

The endpoint deploys scaffold.

### HTTP Request

`POST https://api.openfuture.io/api/scaffolds/doDeploy`

### Request attributes:

Attribute | Type | Description
--------- | -------- |-----------
openKey | String | The openKey`s value
developerAddress | String | The address of developer`s wallet
description | String | The scaffold`s description
fiatAmount | String | The constant cost of scaffold
currency | String | The scaffold`s currency
conversionAmount | String | The dynamic cost of scaffold in Ethereum
properties | [ScaffoldPropertyDto](#scaffold-property-dto-attributes)[] | The scaffold`s properties

<aside class="success">
Response is presented like <a href='#scaffold-dto-attributes'>ScaffoldDto</a>.
</aside>

## Save scaffold

> To save scaffold use this code:

```shell
curl "https://api.openfuture.io/api/scaffolds"
  -X POST
  -H "Authorization: OPEN_KEY"
  -H "Content-Type: application/json"
  -d '{
        "address": "0x1c297f40beb075936d6dbe4b245b92738867ecb1",
        "abi": "[{\"constant\":false,\"inputs\":[{\"name\":\"dfsf\",\"type\":\"string\"}],\"name\":\"payVendor\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"vendorAddress\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"deactivate\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getScaffoldSummary\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"string\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"uint256\"},{\"name\":\"\",\"type\":\"address\"},{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"openScaffoldTransactions\",\"outputs\":[{\"name\":\"customerAddress\",\"type\":\"address\"},{\"name\":\"dfsf\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"fiatAmount\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"scaffoldDescription\",\"outputs\":[{\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"OPENToken\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"scaffoldAmount\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"scaffoldTransactionIndex\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"name\":\"_vendorAddress\",\"type\":\"address\"},{\"name\":\"_description\",\"type\":\"string\"},{\"name\":\"_fiatAmount\",\"type\":\"string\"},{\"name\":\"_fiatCurrency\",\"type\":\"string\"},{\"name\":\"_scaffoldAmount\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"customerAddress\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"transactionAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"scaffoldTransactionIndex\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"dfsf\",\"type\":\"string\"}],\"name\":\"paymentComplete\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"fundsDeposited\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"activated\",\"type\":\"bool\"}],\"name\":\"activatedScaffold\",\"type\":\"event\"}]",
        "openKey": "op_pk_029bbb64-a31d-4ec6-b881-8d8db19c70ee",
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
        ]
    }'
```

> Response is presented like ScaffoldDto

The endpoint saves scaffold.

### HTTP Request

`POST https://api.openfuture.io/api/scaffolds`

### Request attributes:

Attribute | Type | Description
--------- | -------- |-----------
abi | String | The scaffold`s interface
address | String | The scaffold`s address
openKey | String | The openKey`s value
developerAddress | String | The address of developer`s wallet
description | String | The scaffold`s description
fiatAmount | String | The constant cost of scaffold
currency | String | The scaffold`s currency
conversionAmount | String | The dynamic cost of scaffold in Ethereum
properties | [ScaffoldPropertyDto](#scaffold-property-dto-attributes)[] | The scaffold`s properties

<aside class="success">
Response is presented like <a href='#scaffold-dto-attributes'>ScaffoldDto</a>.
</aside>

## Set webhook

> To set webhook use this code:

```shell
curl "https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000"
  -X PATCH
  -H "Authorization: OPEN_KEY"
  -H "Content-Type: application/json"
  -d '{
        "webHook": "https://zensoft.io"
    }'
```

> Response is presented like ScaffoldDto

The endpoint sets webhook.

### HTTP Request

`PATCH https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000`

### Request attributes:

Attribute | Type | Description
--------- | -------- |-----------
webHook | String | The url for webhook

<aside class="success">
Response is presented like <a href='#scaffold-dto-attributes'>ScaffoldDto</a>.
</aside>

## Get scaffold`s summary

> To get scaffold`s summary use this code:

```shell
curl "https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000/summary"
  -H "Authorization: OPEN_KEY"
```

> Response:

```json
{
    "description": "any_description",
    "fiatAmount": "123",
    "fiatCurrency": "usd",
    "amount": 0.2139521163,
    "transactionIndex": 0,
    "vendorAddress": "0xdc29484cc9c02ee01015f33bca8bbb5c7293fb54",
    "tokenBalance": 0,
    "enabled": false
}
```

The endpoint gets scaffold`s summary.

### HTTP Request

`GET https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000/summary`

### Scaffold summary dto attributes:

Attribute | Type | Description
--------- | -------- |-----------
description | String | The scaffold`s description
fiatAmount | String | The constant cost of scaffold
fiatCurrency | String | The scaffold`s currency
amount | BigDecimal | The dynamic cost of scaffold in Ethereum
transactionIndex | BigInteger | The trasaction`s number
vendorAddress | String | The address of developer`s wallet
tokenBalance | BigInteger | The count token for activate scaffold
enabled | Boolean | The scaffold is activated or deactivated

## Deactivate scaffold

> To deactivate scaffold use this code:

```shell
curl "https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000/doDeactivate"
  -X POST
  -H "Authorization: OPEN_KEY"
```

> Response is presented like ScaffoldSummaryDto

The endpoint deactivates scaffold.

### HTTP Request

`POST https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000/doDeactivate`

<aside class="success">
Response is presented like <a href='#scaffold-summary-dto-attributes'>ScaffoldSummaryDto</a>.
</aside>

## Get quota

> To get quota use this code:

```shell
curl "https://api.openfuture.io/api/scaffolds/quota"
  -H "Authorization: OPEN_KEY"
```

> Response:

```json
{
    "currentCount": 1,
    "limitCount": 10
}
```
OPEN Platform has limit on the maximum possible count of deactivated scaffolds. The default is 10 scaffolds.

The endpoint gets quota.

### HTTP Request

`GET https://api.openfuture.io/api/scaffolds/quota`

### Scaffold quota dto attributes:

Attribute | Type | Description
--------- | -------- |-----------
currentCount | Long | The count of deactivated scaffolds
limitCount | Long | The max possible count of deactivated scaffolds
