const _crypto = require('crypto');
const _base64 = require('./base64');

// generic string hashing
function hash(input, algo, encoding=''){
    // string or buffer input ? => keep it
    if (typeof input !== 'string' && !(input instanceof Buffer)){
        input = JSON.stringify(input);
    }

    // create hash algo
    const sum = _crypto.createHash(algo);

    // set content
    sum.update(input);

    switch (encoding){
        case 'bin':
        case 'binary':
            return sum.digest('binary');

        case 'base64':
            return sum.digest('base64');

        case 'base64url':
        case 'base64urlsafe':
            return _base64.base64urlsafeEncode(sum.digest('base64'));

        case 'hex':
        default:
            return sum.digest('hex');
    }
}

// generator
function _frontend(algo){
    return function(input, encoding){
        return hash(input, algo, encoding);
    }
}

// export all function
module.exports = {
    md5:    _frontend('md5'),
    sha1:   _frontend('sha1'),
    sha2:   _frontend('sha256'),
    sha224: _frontend('sha224'),
    sha256: _frontend('sha256'),
    sha384: _frontend('sha384'),
    sha512: _frontend('sha512'),
    whirlpool: _frontend('whirlpool'),

    // generic frontend
    hash: hash
}
