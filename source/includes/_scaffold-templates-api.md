# Scaffold Templates API

## Get templates

> To get all scaffold templates use this code:

```shell
curl "https://api.openfuture.io/api/scaffolds/templates"
  -H "Authorization: OPEN_KEY"
```

> Response:

```json
{
    "name":"name",
    "developerAddress": "0xDc29484cc9C02Ee01015f33BcA8bBb5C7293Fb54",
    "description": "any_description",
    "fiatAmount": "123",
    "currency": "USD",
    "conversionAmount": "0.2139521163",
    "webHook":"http://localhost.com",
    "properties": [
        {
            "name": "property_name",
            "type": "STRING",
            "defaultValue": "property_value"
        }
    ]
}
```

The endpoint gets all scaffold templates.

### HTTP Request

`GET https://api.openfuture.io/api/scaffolds/templates`


### Response attributes:

Attribute | Type | Description
--------- | -------- |-----------
name | String | The openKey`s value
developerAddress | String | The address of developer`s wallet
description | String | The scaffold`s description
fiatAmount | String | The constant cost of scaffold
currency | String | The scaffold`s currency
conversionAmount | String | The dynamic cost of scaffold in Ethereum
webHook | String | The url for webhook
properties | [ScaffoldPropertyDto](#scaffold-property-dto-attributes)[] | The scaffold`s properties
