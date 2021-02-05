const _hash = require('./lib/hash');
const _randomHash = require('./lib/random-hash');
const _random = require('./lib/random');
const {uuidv4} = require('./lib/uuid4');

// expose toolkit
module.exports = {
    uuid: {
        v4: uuidv4
    },
    hash: _hash,
    randomHash: _randomHash,
    random: _random
};