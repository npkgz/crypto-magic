const _cryptoMagic = require('../crypto-magic');
const _assert = require('assert');
const {validate, version} = require('uuid');

// uuid testing
describe('uuidv4', function(){
 
    it('should generate a valid uuid', async function(){
        const uuid = await _cryptoMagic.uuid.v4();
        _assert.ok(validate(uuid));
    });

    it('should generate a valid uuid v4', async function(){
        const uuid = await _cryptoMagic.uuid.v4();
        _assert.ok(validate(uuid));
        _assert.strictEqual(version(uuid), 4);
    });
});
