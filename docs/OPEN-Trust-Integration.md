# OPEN Trust Wallet
![Open Trust](/images/open-trust.png "Open Trust")
### 1. Generate HD Wallet
![Generate HD Wallet](/images/open-trust-generate-wallet.png "Generate HD Wallet")
### 2. Import Wallet
#### 2.1 Import Wallet with Private Key

![Import Wallet](/images/open-trust-import-wallet.png "Import Wallet")
#### 2.2 Private key storage
![Private Key Storage](/images/user-interaction-1.png "Private Key Storage")
### 3. Sign Blockchain Transaction
![Sign Transaction](/images/open-trust-sign-transaction.png "Sign Transaction")
### 4. Broadcast Blockchain Transaction
![Broadcast Transaction](/images/open-trust-broadcast-transaction.png "Broadcast Transaction")
### 5. Encrypt Private Key
![Encryption](/images/encryption.png "Encryption")
### 6. Decrypt Private Key
![Decryption](/images/decryption.png "Decryption")


### How encryption works with Trust Wallet

##### Open Platform private key storage

The private key is used to verify transactions and prove ownership of a blockchain address. When a user wants to import his address to the Open Platform he might concern how securely the platform stores the private key. Storing the data in the raw way can be cracked by hackers or malefactors. The platform does not store sensitive data in raw format but it encrypts them. This is done by SDK
Open Platform provides different SDK’s to allow users to encrypt their private key on their own.

That SDK has a pair of methods to work with:

* encrypt(password, data)
* decrypt(password, encryptedData)

It is used by Open Platform itself to encrypt and decrypt data appropriately. It is implemented using the AES (also known as the Rijndael algorithm) and publicly available. Right now it is supported by two platforms: JVM, PHP.

##### What the AES is.
AES (advanced encryption algorithm) is a symmetric block cipher algorithm. Symmetric encryption schemes use the same symmetric key (or password) to encrypt data and decrypt the encrypted data back to its original form. In present day cryptography, AES is widely adopted and supported in both hardware and software. Till date, no practical cryptanalytic attacks against AES have been discovered. Additionally, AES has built-in flexibility of key length, which allows a degree of ‘future-proofing’ against progress in the ability to perform exhaustive key searches. Open Platform uses Counter modification of this algorithm with 256 block size. Further is described what it will look like as part of the platform.

A user provides his password and private key to the platform where it will be encrypted using the mentioned above function of SDK. Then any time the user wants to do a transaction, encrypted data will be retrieved from the database, decrypted using his password and used in further operations.

The part working with passwords is not trivial as well. Any time when password is provided it will be transformed with KDF (key derivation function) in order to survive password guessing (brute force) attacks. Since the attacker might know a password in plain text/encrypted form, he can guess the logic of the encryption and try to reverse it. If he succeeds, all passwords will be retrieved as quickly as they were in plain text, regardless of the algorithm’s complexity. This is why the platform uses a KDF function.


These type of functions have many strengths:

* Non reversible
* Slower to calculate
* More RAM-intensive (which is the weak point of GPUs)
* Defining the number of iterations of the cryptographic function used. The more iterations, the more expensive the calculation will be

Open Platform uses PBKDF2. PBKDF2 is a simple cryptographic key derivation function, which is resistant to dictionary attacks and rainbow table attacks.

PBKDF2 takes several input parameters and produces the derived key as output:

**key = pbkdf2(password, salt, iterations-count, hash-function, derived-key-len)**

Technically, the input data for PBKDF2 consists of:

* password – "raw_password"
* salt – securely generated random word transformed to bytes.
* iterations-count, e.g. 1024 iterations
* hash-function for calculating HMAC, e.g. SHA256
* derived-key-len for the output
The output data is the derived key of requested length (e.g. 256 bits). Open Platform uses 256 bits which is 32 UTF-8 bytes length.

The following steps are performed when a user is interacting with the Open Platform.

1. A user imports private keys to the Open Platform along with any desired password
2. The platform derives the key with PBKDF2
3. Raw private key is encrypted with the AES using the derived key and stored in the database and associated with the user.
4. The user wants to make an operation with the wallet, he provides the original password, the Open Platform transforms it with PBKDF2 function and decrypts private key and 
   performs the operation.

