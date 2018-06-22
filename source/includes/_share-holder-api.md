# Share Holder API

## Add Share Holder

> To add share holder use this code:

```shell
curl "https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000/holders"
  -X POST
  -H "Authorization: OPEN_KEY"
  -H "Content-Type: application/json"
  -d '{
        "address": "0x1c297f40beb075936d6dbe4b245b92738867ecb1",
        "percent": 30
    }'
```

The endpoint adds new share holder.

### HTTP Request

`POST https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000/holders`

### Request attributes:

Attribute | Type | Description
--------- | -------- |-----------
address | String | The address of wallet of share holder
percent | String | The percentage of income

## Update Share Holder

> To update share holder use this code:

```shell
curl "https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000/holders"
  -X PUT
  -H "Authorization: OPEN_KEY"
  -H "Content-Type: application/json"
  -d '{
        "address": "0x1c297f40beb075936d6dbe4b245b92738867ecb1",
        "percent": 30
    }'
```

The endpoint edits share holder.

### HTTP Request

`PUT https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000/holders`

### Request attributes:

Attribute | Type | Description
--------- | -------- |-----------
address | String | The address of wallet of share holder
percent | String | The percentage of income

## Remove Share Holder

> To delete share holder use this code:

```shell
curl "https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000/holders"
  -X DELETE
  -H "Authorization: OPEN_KEY"
  -H "Content-Type: application/json"
  -d '{
        "address": "0x1c297f40beb075936d6dbe4b245b92738867ecb1"
    }'
```

The endpoint removes share holder.

### HTTP Request

`DELETE https://api.openfuture.io/api/scaffolds/0x0000000000000000000000000000000000000000/holders`

### Request attributes:

Attribute | Type | Description
--------- | -------- |-----------
address | String | The address of wallet of share holder
