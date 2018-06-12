# User API

## Get current user

> To get current user use this code:

```shell
curl "https://api.openfuture.io/api/users/current"
  -H "Authorization: OPEN_KEY"
```

> Response:

```json
{
    "id": 1,
    "credits": 0,
    "openKeys": [{
        "value": "op_pk_5ea7197b-af53-49a7-87e4-6fc41fa1e97c",
        "enabled": true,
        "expiredDate": "2018-08-07T12:05:08.293+0000"
    }]
}
```

The endpoint gets current user.

### HTTP Request

`GET https://api.openfuture.io/api/users/current`

### User dto attributes:

Attribute | Type | Description
--------- | -------- |-----------
id | Long | The user`s id
credits | Integer | The user`s balance in Ethereum
openKeys | [OpenKeyDto](#openkey-dto-attributes)[] | The user`s openKeys
