const {randomBytes} = require('./random');
const _hash = require('./hash');

// generator
function _frontend(hashtype){
    return async function(encoding){
        // generate random input
        const data = await randomBytes(514);

        // calculate the hash
        return _hash.hash(data, hashtype, encoding);
    }
}

module.exports = {
    md5:    _frontend('md5'),
    sha1:   _frontend('sha1'),
    sha2:   _frontend('sha256'),
    sha224: _frontend('sha224'),
    sha256: _frontend('sha256'),
    sha384: _frontend('sha384'),
    sha512: _frontend('sha512'),
    whirlpool: _frontend('whirlpool')
}