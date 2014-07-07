# Meteor AES
Stand-alone encryption package to encrypt/decrypt data with AES using Crypto-JS. I made this because the existing crypto-aes smart package is broken, and I wanted a single easy to use AES for my own purposes. This is just the CryptoJS v3.1.2 AES rollup file wrapped into a smart package.

This package does not depend on crypto-base or any other smart packages.

CryptoJS is at https://code.google.com/p/crypto-js/

## Installation

``` sh
$ mrt add AES
```

## How to use


``` javascript
encrypted = CryptoJS.AES.encrypt('Message', 'Passphrase');
console.log(encrypted.toString());
// 53616c7465645f5fe5b50dc580ac44b9be85d240abc5ff8b66ca327950f4ade5

decrypted = CryptoJS.AES.decrypt('Message', 'Passphrase');
console.log(decrypted.toString(CryptoJS.enc.Utf8));
// Message
```
