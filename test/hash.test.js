const _cryptoMagic = require('../crypto-magic');
const _assert = require('assert');
const _refHashes = require('./hashes.json');

// checksum testing
describe('sha1', function(){
 
    it('should calculate correct hashsums of given dataset', function(){
        const dataset = _refHashes.sha1;

        for (const teststring in dataset){
            // calculate hash
            const hash = _cryptoMagic.hash.sha1(teststring);
            _assert.strictEqual(hash, dataset[teststring]);
        }
    });

    it('should fail', function(){
        const hash = _cryptoMagic.hash.sha1('uQ9yprDNFMH53TjpTFdQkJIONv9mCH2N');
        _assert.notStrictEqual(hash, 'c46956cefa919c3f201ef985466d4203');
    });
});

// checksum testing
describe('sha224', function(){
 
    it('should calculate correct hashsums of given dataset', function(){
        const dataset = _refHashes.sha224;

        for (const teststring in dataset){
            // calculate hash
            const hash = _cryptoMagic.hash.sha224(teststring);
            _assert.strictEqual(hash, dataset[teststring]);
        }
    });
});

// checksum testing
describe('sha256', function(){
 
    it('should calculate correct hashsums of given dataset', function(){
        const dataset = _refHashes.sha256;

        for (const teststring in dataset){
            // calculate hash
            const hash = _cryptoMagic.hash.sha256(teststring);
            _assert.strictEqual(hash, dataset[teststring]);
        }
    });
});

// checksum testing
describe('sha384', function(){
 
    it('should calculate correct hashsums of given dataset', function(){
        const dataset = _refHashes.sha384;

        for (const teststring in dataset){
            // calculate hash
            const hash = _cryptoMagic.hash.sha384(teststring);
            _assert.strictEqual(hash, dataset[teststring]);
        }
    });
});

// checksum testing
describe('sha512', function(){
 
    it('should calculate correct hashsums of given dataset', function(){
        const dataset = _refHashes.sha512;

        for (const teststring in dataset){
            // calculate hash
            const hash = _cryptoMagic.hash.sha512(teststring);
            _assert.strictEqual(hash, dataset[teststring]);
        }
    });
});

// checksum testing
describe('md5', function(){
 
    it('should calculate correct hashsums of given dataset', function(){
        const dataset = _refHashes.md5;

        for (const teststring in dataset){
            // calculate hash
            const hash = _cryptoMagic.hash.md5(teststring);
            _assert.strictEqual(hash, dataset[teststring]);
        }
    });
});

// checksum testing
describe('whirlpool', function(){
 
    it('should calculate correct hashsums of given dataset', function(){
        const dataset = _refHashes.whirlpool;

        for (const teststring in dataset){
            // calculate hash
            const hash = _cryptoMagic.hash.whirlpool(teststring);
            _assert.strictEqual(hash, dataset[teststring]);
        }
    });
});