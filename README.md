# Meteor AES
Stand-alone encryption package to encrypt/decrypt data with AES using Crypto-JS. I made this because the existing crypto-aes smart package is broken, and I wanted a single easy to use AES package for my own purposes. This is just the CryptoJS v3.1.2 AES rollup file wrapped into a smart package.

This package does not depend on crypto-base or any other smart packages.

CryptoJS is at https://code.google.com/p/crypto-js/

## Installation

``` sh
$ meteor add altapp:aes
```

## How to use


``` javascript
encrypted = CryptoJS.AES.encrypt('Message', 'Passphrase');
console.log(encrypted.toString());
// U2FsdGVkX18Hpf311+ZPEcnB/e2rP3vSHoACIBv0Lq8=

decrypted = CryptoJS.AES.decrypt(encrypted, 'Passphrase');
console.log(decrypted.toString(CryptoJS.enc.Utf8));
// Message
```
