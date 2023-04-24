# OPEN Sample Application
### [Download PDF](/pdf/open_platform_sample_application.pdf)
## Create Application
#### [Login](https://api.openfuture.io/) and move to Application page 
![Application List](/images/applications-list-page.png "Application List")
#### Click Add Application
![New Application Create](/images/new-application-create-page.png "New Application Create")
#### After creation go details of application
![Application Detail](/images/application-detail-page.png "Application Detail")
Below you can see the description of each field:

- Access Key — used for encryption 
- Secret Key — used for signature

Wallets can be generated manually or by API

## WordPress Integration

### Install WooCommerce Open Platform Gateway plugin
![Install plugin](/images/wordpress-plugin-activate.png "Install Plugin")

### Manage WooCommerce Open Platform Gateway plugin
![Manage plugin](/images/wordpress-plugin-settings.png "Manage Plugin")

### Manage Payment WooCommerce Open Platform Gateway plugin
![Manage payment plugin](/images/wordpress-plugin-payment-manage.png "Manage Payment")

### WooCommerce Open Platform Gateway plugin on checkout page of e-commerce site
![Checkout page](/images/wordpress-checkout.png "Checkout page")

### Open Widget Checkout
![Open Widget](/images/open-widget.png "Open Widget")

## Wallet API

> To generate new wallet with order metadata:

```shell
curl --request POST 'https://api.openfuture.io/public/api/v1/wallet/generate' \
--header 'X-API-SIGNATURE: 98a5ecdcc239f27f60d95013d4e11c6d9a2d8a4162e08559f58f20417637abb6' \
--header 'X-API-KEY: op_SbS871L34UamZlvxA1nj' \
--header 'X-API-TIMESTAMP: 1650257339' \
--header 'Content-Type: application/json' \
--data-raw '{
    "metadata":{
        "amount":"10.00", 
        "orderId":"1", 
        "orderKey":"wc_order_8WtVNDm4E3usj", 
        "paymentCurrency":["ETH"],
        "productCurrency":"USD", 
        "source":"woocommerce", 
        "test":true
    }
}'  
```
- X-API-SIGNATURE : hmac256(body, Application Secret Key)
- X-API-KEY : Application Access Key

> Response: if signature mismatch or request timeout

```json
{
  "status": 401,
  "message": "Signature mismatch or request timeout"
}
```

> Response: successfully

```json
[
  {
    "address": "0x4c72a7abf5ff9bea0b4fa386d9fcf110899974d5",
    "blockchain": "ETH"
  }
]
```

> Generate wallet for USER:

```shell
curl --request POST 'https://api.openfuture.io/public/api/v2/wallet/user/generate' \
--header 'X-API-SIGNATURE: 98a5ecdcc239f27f60d95013d4e11c6d9a2d8a4162e08559f58f20417637abb6' \
--header 'X-API-KEY: op_SbS871L34UamZlvxA1nj' \
--header 'X-API-TIMESTAMP: 1650257339' \
--header 'Content-Type: application/json' \
--data-raw '{
    "blockchains":["ETH"],
    "metadata": {},
    "test":true,
    "user_id":"1",
    "webhook":"webhook"
}'  
```

> Import wallet for USER:

```shell
curl --request POST 'https://api.openfuture.io/public/api/v2/wallet/user/import' \
--header 'X-API-SIGNATURE: 98a5ecdcc239f27f60d95013d4e11c6d9a2d8a4162e08559f58f20417637abb6' \
--header 'X-API-KEY: op_SbS871L34UamZlvxA1nj' \
--header 'X-API-TIMESTAMP: 1650257339' \
--header 'Content-Type: application/json' \
--data-raw '{
    "metadata": {},
    "test":true,
    "user_id":"1",
    "wallets":{
      "address":"0x4c72a7abf5ff9bea0b4fa386d9fcf110899974d5",
      "blockchain_type":"ETH",
      "encrypted_data":"6c58a07817e5d0d14271766e9c93f35d45f65d2cc3824690c34efc564b463a"
    },
    "webhook":"webhook"
}'  
```

> Generate wallet for ORDER:

```shell
curl --request POST 'https://api.openfuture.io/public/api/v2/wallet/order/generate' \
--header 'X-API-SIGNATURE: 98a5ecdcc239f27f60d95013d4e11c6d9a2d8a4162e08559f58f20417637abb6' \
--header 'X-API-KEY: op_SbS871L34UamZlvxA1nj' \
--header 'X-API-TIMESTAMP: 1650257339' \
--header 'Content-Type: application/json' \
--data-raw '{
    "amount":"100",
    "blockchains":["ETH"],
    "metadata": {},
    "order_currency":"USD",
    "order_id":"op_order_id",
    "test":true,
    "webhook":"webhook"
}'  
```

> Import wallet for ORDER:

```shell
curl --request POST 'https://api.openfuture.io/public/api/v2/wallet/user/import' \
--header 'X-API-SIGNATURE: 98a5ecdcc239f27f60d95013d4e11c6d9a2d8a4162e08559f58f20417637abb6' \
--header 'X-API-KEY: op_SbS871L34UamZlvxA1nj' \
--header 'X-API-TIMESTAMP: 1650257339' \
--header 'Content-Type: application/json' \
--data-raw '{
    "amount":"100",
    "metadata": {},
    "order_currency":"USD",
    "order_id":"op_order_id",
    "test":true,
    "wallets":{
      "address":"0x4c72a7abf5ff9bea0b4fa386d9fcf110899974d5",
      "blockchain_type":"ETH",
      "encrypted_data":"6c58a07817e5d0d14271766e9c93f35d45f65d2cc3824690c34efc564b463a"
    },
    "webhook":"webhook"
}'  
```

> GET wallets of USER:

```shell
curl --request GET 'https://api.openfuture.io/public/api/v2/wallet/user?userId={userId}' \
--header 'X-API-KEY: op_SbS871L34UamZlvxA1nj' \
--header 'Content-Type: application/json'  
```

> GET wallets of ORDER:

```shell
curl --request GET 'https://api.openfuture.io/public/api/v2/wallet/order?orderId={orderId}' \
--header 'X-API-KEY: op_SbS871L34UamZlvxA1nj' \
--header 'Content-Type: application/json'  
```

> Response: successfully

```json
[
  {
    "address": "0x4c72a7abf5ff9bea0b4fa386d9fcf110899974d5",
    "blockchain": "ETH",
    "wallet_type": "CUSTODIAL",
    "encrypted": ""
  }
]
```