# JVM-SDK

OpenJ is a library for interaction with Open Platform.

## Installing

Using gradle:

```xml
compile("io.openfuture:sdk:1.0.0")
```

Using maven:

```xml
<dependency>
    <groupId>io.openfuture</groupId>
    <artifactId>sdk</artifactId>
    <version>1.0.0</version>
</dependency>
```

## Get started

`token` - your open key

> Kotlin:
```kotlin
val open = OpenJ(token)
```

> Java:
```java
OpenJ open = new OpenJ(token)
```


## Entity

### Base

#### Page request attributes

Attribute | Type | Description
----------|------|-----------
offset    |Long  | Page offset
limit     |Int   | Page limit

#### Page response attributes

Attribute | Type | Description
----------|------|-----------
totalCount|Long  | Total count of entities in a database
list      |T[]   | List of entities with type T (T is generic)


### Scaffold

#### Scaffold attributes

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
address         |String                                               | Scaffold address
abi             |String                                               | Scaffold json interface
description     |String                                               | Scaffold description
fiatAmount      |String                                               | Scaffold fiat amount
currency        |String                                               | Fiat amount currency
conversionAmount|String                                               | Fiat amount converted to ethereum 
developerAddress|String                                               | Scaffold developer address
webHook         |String                                               | Scaffold webhook for events
properties      |[ScaffoldProperty](#scaffold-properties-attributes)[]| Scaffold properties

#### Scaffold properties attributes

Attribute   | Type       | Description
------------|------------|-----------
name        |String      | Property name
type        |PropertyType| Property type
defaultValue|String      | Property default value

#### Scaffold summary attributes

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
scaffold        |[Scaffold](#scaffold-attributes)                     | Scaffold
transactionIndex|BigInteger                                           | Transaction index
tokenBalance    |BigInteger                                           | Scaffold token balance
enabled         |Boolean                                              | Scaffold enabled
currency        |String                                               | Fiat amount currency
shareHolders    |[ShareHolder](#share-holder-attributes)              | Scaffold share holders

#### Quota attributes

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
currentCount    |Int                                                  | Current deactivated scaffolds count
limitCount      |Int                                                  | Limit of deactivated scaffolds count

#### Deploy scaffold request

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
openKey         |String                                               | User open key
description     |String                                               | Scaffold description
fiatAmount      |String                                               | Scaffold fiat amount
currency        |String                                               | Fiat amount currency
conversionAmount|String                                               | Fiat amount converted to ethereum 
developerAddress|String                                               | Scaffold developer address
webHook         |String                                               | Scaffold webhook for events
properties      |[ScaffoldProperty](#scaffold-properties-attributes)[]| Scaffold properties

#### Set web hook request

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
address         |String                                               | Scaffold address
webHook         |String                                               | Scaffold webhook for events


### Shareholder

#### Shareholder attributes

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
address         |String                                               | Shareholder address
percent         |Int                                                  | Shareholder percent

#### Add shareholder request

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
address         |String                                               | Shareholder address
percent         |Int                                                  | Shareholder percent

#### Update shareholder request

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
address         |String                                               | Shareholder address
percent         |Int                                                  | Shareholder percent

#### Remove shareholder request

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
address         |String                                               | Shareholder address

### Transaction

#### Transaction attributes

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
scaffold        |[Scaffold](#scaffold-attributes)                     | Scaffold
event           |[Event](#event)                                      | Event


### Event

Each event has field `type` which define an event type

#### Activate scaffold event

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
activated       |Boolean                                              |Scaffold state
type            |String                                               |"ACTIVATED_SCAFFOLD"

#### Added share holder event

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
userAddress     |String                                               |Share holder address
partnerShare    |BigInteger                                           |Share holder share
type            |String                                               |"ADDED_SHARE_HOLDER"

#### Delete share holder event

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
userAddress     |String                                               |Share holder address
type            |String                                               |"DELETED_SHARE_HOLDER"

#### Edit share holder event

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
userAddress     |String                                               |Shareholder address
partnerShare    |BigInteger                                           |Shareholder share
type            |String                                               |"EDITED_SHARE_HOLDER"

#### Funds deposited event

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
amount          |BigInteger                                           |Funds amount
toAddress       |String                                               |To address
type            |String                                               |"FUNDS_DEPOSITED"

#### Paid for shareholder event

Attribute       | Type                                                | Description
----------------|-----------------------------------------------------|-----------
userAddress     |String                                               |Shareholder address
amount          |BigInteger                                           |Paid amount
type            |String                                               |"PAID_FOR_SHARE_HOLDER"

#### Payment completed event

Attribute               | Type                                                | Description
------------------------|-----------------------------------------------------|-----------
customerAddress         |String                                               |Customer address
transactionAmount       |BigInteger                                           |Paid amount
scaffoldTransactionIndex|BigInteger                                           |Transaction index
properties              |Map<String, Any>                                     |Transaction properties
type                    |String                                               |"PAYMENT_COMPLETED"



## API

`sender` - an object that produces requests for each entity type

### Scaffold

> Kotlin:
```kotlin
val sender = open.scaffold()
```

> Java:
```java
ScaffoldSender sender = open.scaffold()
```

#### Get All

`Can be used with` [page request](#page-request-attributes)

> Kotlin:
```kotlin
val scaffolds = sender.getAll()
```

> Java:
```java
PageResponse<Scaffold> scaffolds = sender.getAll()
```

`Response entity is` [PageResponse](#page-response-attributes) `with param` [Scaffold](#scaffold-attributes)

#### Get one

> Kotlin:
```kotlin
val scaffold = sender.get(address)
```

> Java:
```java
Scaffold scaffold = sender.get(address)
```

`address` - `Scaffold address`

`Response entity is` [Scaffold](#scaffold-attributes)

#### Deploy

> Kotlin:
```kotlin
val scaffold = sender.deploy(DeployScaffoldRequest(openKey, developerAddress, description, fiatAmount, currency, 
                                                   conversionAmount, properties, webHook))
```

> Java:
```java
Scaffold scaffold = sender.deploy(new DeployScaffoldRequest(openKey, developerAddress, description, fiatAmount, currency, 
                                                   conversionAmount, properties, webHook))
```

`Request entity is` [DeployScaffoldRequest](#deploy-scaffold-request)

`Response entity is` [Scaffold](#scaffold-attributes)

#### Set webhook

> Kotlin:
```kotlin
val scaffold = sender.setWebHook(SetWebHookRequest(address, webHook))
```

> Java:
```java
Scaffold scaffold = sender.setWebHook(new SetWebHookRequest(address, webHook))
```

`Request entity is` [SetWebHookRequest](#set-web-hook-request)

`Response entity is` [Scaffold](#scaffold-attributes)

#### Get summary

> Kotlin:
```kotlin
val summary = sender.summary(address)
```

> Java:
```java
ScaffoldSummary summary = sender.summary(address)
```

`address` - `Scaffold address`

`Response entity is` [ScaffoldSummary](#scaffold-summary-attributes)

#### Deactivate 

> Kotlin:
```kotlin
val summary = sender.deactivate(address)
```

> Java:
```java
ScaffoldSummary summary = sender.deactivate(address)
```

`address` - `Scaffold address`

`Response entity is` [ScaffoldSummary](#scaffold-summary-attributes)

#### Get quota

> Kotlin:
```kotlin
val quota = sender.quota()
```

> Java:
```java
ScaffoldQuota quota = sender.quota()
```

`Response entity is` [ScaffoldQuota](#quota-attributes)


### Shareholder

> Kotlin:
```kotlin
val sender = open.shareHolder(address)
```

> Java:
```java
ShareHolderSender sender = open.shareHolder(address)
```

`address` - `Scaffold address`

#### Add

> Kotlin:
```kotlin
val summary = sender.add(AddShareHolderRequest(address, percent))
```

> Java:
```java
ScaffoldSummary summary = sender.add(new AddShareHolderRequest(address, percent))
```

`Request entity is` [AddShareHolderRequest](#add-share-holder-request)

`Response entity is` [ScaffoldSummary](#scaffold-summary-attributes)

#### Update

> Kotlin:
```kotlin
val summary = sender.add(UpdateShareHolderRequest(address, percent))
```

> Java:
```java
ScaffoldSummary summary = sender.add(new UpdateShareHolderRequest(address, percent))
```

`Request entity is` [UpdateShareHolderRequest](#update-share-holder-request)

`Response entity is` [ScaffoldSummary](#scaffold-summary-attributes)

#### Remove

> Kotlin:
```kotlin
val summary = sender.add(RemoveShareHolderRequest(address))
```

> Java:
```java
ScaffoldSummary summary = sender.add(new RemoveShareHolderRequest(address))
```

`Request entity is` [RemoveShareHolderRequest](#remove-share-holder-request)

`Response entity is` [ScaffoldSummary](#scaffold-summary-attributes)


### Transaction

> Kotlin:
```kotlin
val sender = open.transaction(address)
```

> Java:
```java
TransactionSender sender = open.transaction(address)
```

`address` - `Scaffold address`

#### Get All

`Can be used with` [page request](#page-request-attributes)

> Kotlin:
```kotlin
val transactions = sender.getAll()
```

> Java:
```java
PageResponse<Transaction> transactions = sender.getAll()
```

`Response entity is` [PageResponse](#page-response-attributes) `with param` [Transaction](#transaction-attributes)


