# OpenKey API

## Generate token

> To generate a new openKey use this code:

```shell
curl "https://api.openfuture.io/api/keys"
  -X POST
  -H "Authorization: OPEN_KEY"
```

> Response:

```json
{
    "value": "op_pk_7395a0fa-d39f-4f52-ab08-d27cdc7b8472",
    "enabled": true,
    "expiredDate": "2018-08-07T12:05:08.293+0000"
}
```

The endpoint generates a new openKey.

### HTTP Request

`POST https://api.openfuture.io/api/keys`

### OpenKey dto attributes:

Attribute | Type | Description
--------- | -------- |-----------
value | String | The openKey`s value
enabled | Boolean | The openKey is activated or deactivated
expiredDate | Date | The date when openKey will expire
