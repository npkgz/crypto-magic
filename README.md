crypto-magic
==============

A set of utility functions/wrapper to simplify the development workflow

```bash
$ yarn add crypto-magic
```

Features
--------

* Hash Function Wrapper (MD5, SHA1, SHA244, SHA256, SHA384, SHA512, WHIRLPOOL)
* Create Object/Array Hashes based on its JSON representation
* UUIDv4 generator usinc async crypto api `randomBytes`
* base64 urlsafe encoder/decoder

Hash Function Wrapper
---------------------

Provides easy access to the [Node.js Crypto Hash](https://nodejs.org/api/crypto.html#crypto_class_hash) functions. Examples are available in [examples/hash.js](examples/hashes.js)

```js
const {hash} = require('crypto-magic');

console.log(hash.sha256('Hello World'));
```

##### Initialization #####

The argument `encoding` is optional and defines the output encoding of the digest.

 * **hex** (default) - hexadecimal string output
 * **base64** - base64 string output
 * **base64urlsafe** - url-safe base64 string output (**/+=** are replaced by **_-**)
 * **binary** - binary output as [Buffer](https://nodejs.org/api/buffer.html)

##### Hash Algorithms #####

The following wrappers are included:

 * `md5(input:mixed, [encoding:string])`
 * `sha1(input:mixed, [encoding:string])`
 * `sha2(input:mixed, [encoding:string])`
 * `sha224(input:mixed, [encoding:string])`
 * `sha256(input:mixed, [encoding:string])`
 * `sha384(input:mixed, [encoding:string])`
 * `sha512(input:mixed, [encoding:string])`
 * `whirlpool(input:mixed, [encoding:string])` 
 
### General Usage ###

```js
const {hash} = require('crypto-magic');

// some input
const input = 'Hello World';

// display some hashes
console.log('Default HEX Output');
console.log(' |- MD5      ', hash.md5(input));
console.log(' |- SHA1     ', hash.sha1(input));
console.log(' |- SHA256   ', hash.sha256(input));
console.log(' |- SHA384   ', hash.sha384(input));
console.log(' |- SHA512   ', hash.sha512(input));
console.log(' |- WHIRLPOOL', hash.whirlpool(input));

// override the default output type
console.log('Override the default output settings');
console.log(' |- HEX      ', hash.sha1(input, 'hex'));
console.log(' |- BIN      ', hash.sha1(input, 'binary'));
console.log(' |- BASE64   ', hash.sha1(input, 'base64'));
console.log('');
```

### Objects ###

Objects/Arrays are automatically serialized as JSON String. The JSON object is then passed into the hash function.

```js
const {hash} = require('crypto-magic');

// demo object
const objectInput = {
    x: 1,
    b: 2,
    c: [5,6,7],
    d: {
        y: 'Hello',
        z: 'World'
    }
};

console.log('Object Input');
console.log(' |- SHA256   ', hash.sha256(objectInput));
```

Random Hash Generator
---------------------

Create random hashes easily. Just calls the `crypto-magic.hash` functions with a random content generated by `crypto-magic.random(514)` - helpful for random URLs or filenames (e.g. cache hashes).

```js
// url-safe base64
const {randomHash} = require('crypto-magic');

// all hash function of crypto-magic.hash are supported
console.log(await randomHash.sha256('base64urlsafe'));

// output like b7qhqd-WnKAH_GmBpSpvQrdkfUdLxL0m__XGcLTRsbI
```

## License ##
crypto-magic is OpenSource and licensed under the Terms of [The MIT License (X11)](http://opensource.org/licenses/MIT) - your're welcome to contribute
