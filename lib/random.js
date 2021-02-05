const _util = require('util');
const _crypto = require('crypto');
const _randomBytes = _util.promisify(_crypto.randomBytes);

module.exports = {
    randomBytes: _randomBytes
};