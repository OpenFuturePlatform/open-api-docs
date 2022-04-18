# OPEN Sample Application
### [Download PDF](/pdf/open_platform_sample_application.pdf)
## Create Application
#### [Login](https://api.openfuture.io/) and move to Application page 
![Application List](/images/sa/applications-list-page.png "Application List")
#### Click Add Application
![New Application Create](/images/sa/new-application-create-page.png "New Application Create")
#### After creation go details of application
![Application Detail](/images/sa/application-detail-page.png "Application Detail")
Below you can see the description of each field:

- Access Key — used for encryption 
- Secret Key — used for signature

Wallets can be generated manually or by API

## WordPress Integration

### Install WooCommerce Open Platform Gateway plugin
![Install plugin](/images/sa/wordpress-plugin-activate.png "Install Plugin")

### Manage WooCommerce Open Platform Gateway plugin
![Manage plugin](/images/sa/wordpress-plugin-settings.png "Manage Plugin")

### Manage Payment WooCommerce Open Platform Gateway plugin
![Manage payment plugin](/images/sa/wordpress-plugin-payment-manage.png "Manage Payment")

### WooCommerce Open Platform Gateway plugin on checkout page of e-commerce site
![Checkout page](/images/sa/wordpress-checkout.png "Checkout page")

### Open Widget after checkout
![Open Widget](/images/sa/open-widget.png "Open Widget")

## Wallet API

> To generate new wallet:

```shell
curl --request POST 'https://api.openfuture.io/public/api/v1/wallet/generate' \
--header 'X-API-SIGNATURE: 98a5ecdcc239f27f60d95013d4e11c6d9a2d8a4162e08559f58f20417637abb6' \
--header 'X-API-KEY: op_SbS871L34UamZlvxA1nj' \
--header 'Content-Type: application/json' \
--data-raw '{
    "timestamp":"1650257339",
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