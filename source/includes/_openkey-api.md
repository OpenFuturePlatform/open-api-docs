# OpenKey API

> A OpenKey can be presented through the following JSON:

```json
{
    "value": "op_pk_7395a0fa-d39f-4f52-ab08-d27cdc7b8472",
    "enabled": true,
    "expiredDate": "2018-08-07T12:05:08.293+0000"
}
```

### OpenKey dto attributes:

Attribute | Type | Description
--------- | -------- |-----------
value | String | The openKey`s value
enabled | Boolean | The openKey is activated or deactivated
expiredDate | Date | The date when openKey will expire

## Generate token

> To generate a new openKey use this code:

```shell
curl "https://api.openfuture.io/api/keys"
  -X POST
  -H "Authorization: OPEN_KEY"
  -d '{
      "expireDate": "2018-08-07T12:05:08.293+0000"
    }'

```

> Response is presented like of OpenKeyDto

The endpoint generates a new openKey.

### HTTP Request

`POST https://api.openfuture.io/api/keys`

<aside class="success">
Response is presented like <a href='#openkey-dto-attributes'>OpenKeyDto</a>.
</aside>

## Get tokens

> To get openKeys:

```shell
curl "https://api.openfuture.io/api/keys"
  -H "Authorization: OPEN_KEY"
```

> Response is presented like array of OpenKeyDto

The endpoint gets an array of openKeys.

### HTTP Request

`GET https://api.openfuture.io/api/keys`

<aside class="success">
Response is presented like array of <a href='#openkey-dto-attributes'>OpenKeyDto</a>.
</aside>

## Disable token

> To disable an openKey:

```shell
curl "https://api.openfuture.io/api/keys/op_pk_7395a0fa-d39f-4f52-ab08-d27cdc7b8472"
  -X DELETE
  -H "Authorization: OPEN_KEY"
```

> Response is presented like OpenKeyDto

The endpoint disable an openKey.

### HTTP Request

`DELETE https://api.openfuture.io/api/keys/op_pk_7395a0fa-d39f-4f52-ab08-d27cdc7b8472`

<aside class="success">
Response is presented like <a href='#openkey-dto-attributes'>OpenKeyDto</a>.
</aside>
