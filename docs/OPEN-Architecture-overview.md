# OPEN Architecture overview
 
## Components diagram
![Architecture-overview](/images/architecture-overview.svg "Architecture overview")


Open Platform is built using multiple services and components, where each of them solves  a specific business problem.

####Services:

1. Open API

The gateway and bridge to other OPENs services. It’s responsible for user management and security, RESTful API and serves the management UI.

2. Open State

OPEN State provides a functionality for tracking wallets and notify through webhook the changes. For a developer to accept cryptocurrency, they need to implement many different things. First of all, there might be many different options such as Bitcoin, Ethereum, ERC20. For each currency, the developer needs to implement its integration. For the integration, there are also many options such as native integration or payment gateway integration.
Each native integration is usually very complicated and might be vulnerable.
OPEN State utilizes the reactive approach and has been developed with a beautiful architecture, good description and explanation.
Many backend services these days are REST-ful (i.e. they operate over HTTP) so the underlying protocol is fundamentally blocking and synchronous. Microservice calls or API calls often involve calling other services, and then even more services depending on the results from the first calls. With so much IO going on, if you were to wait for one call to complete before sending the next request, your poor client would give up in frustration before you managed to assemble a reply. So external service calls, especially complex orchestrations of dependencies between calls, are a good thing to optimize. In Open State, as we call external APIs over HTTP such as getting state of blocks in Ethereum, we utilize kotlin coroutines. Additionally our storage libraries provide reactive drivers.
The architecture of tracking wallets provides an easy way to extend and multiply the number of the integrated blockchain networks. And it’s not only powerful from the performance perspective, but also extensible. Furthermore, it is already integrated with Ethereum. And in the near future, it will support Bitcoin, Ethereum ERC20 tokens and BNB (Binance blockchain).

3. Open Key

Open Key is the service for managing regular crypto wallets and HD wallets. It also allows importing wallets with private keys. For the storage Open Key uses MongoDB, where any data will be stored in encrypted format. For the encryption it relies on the JVM SDK based on the Trust Wallet Core.

4. Open Chain
This standalone service is OPENs own blockchain.

Since brief information won’t cover all details, more of that could be found in the following link
https://github.com/OpenFuturePlatform/open-chain/wiki


####Non service components:
1. Wordpress eCommerce plugin
2. Fork of Trust Wallet Core library
3. SDK based Trust Wallet Core for JVM, PHP
