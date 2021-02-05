const {randomBytes} = require('./random');
const _base64 = require('./base64');

function uuid4format(s){
    return  s.substr(0,8) + '-' +
            s.substr(8,4) + '-' +
            s.substr(12,4) + '-' +
            s.substr(16,4) + '-' +
            s.substr(20,12);
}

// simplified uuid v4 generation using crypto api
async function uuidv4(format=''){

    // generate random data
    const data = await randomBytes(16);

    // as of rfc4122 section 4.4.
    // https://tools.ietf.org/html/rfc4122

    // Set the two most significant bits (bits 6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
    // clear bit 6+7 0b00111111 (0x3f), set MSB0 0b10000000 (0x80)
    data[8] = (data[8] & 0x3f) | 0x80;

    // Set the four most significant bits (bits 12 through 15) of the time_hi_and_version field to the 4-bit version number to 0b0100 (v4)
    // clear upper 4 bits 0b00001111 (0x0f), set MSB1 0b01000000 (0x40)
    data[6] = (data[6] & 0x0f) | 0x40;

    // convert to requested format
    switch (format){
        case 'hex':
            return data.toString('hex');

        case 'base64':
            return data.toString('base64');

        case 'base64url':
        case 'base64urlsafe':
            return _base64.base64urlsafeEncode(data.toString('base64'));

        default:
            return uuid4format(data.toString('hex'));
    }
}

module.exports = {
    uuidv4: uuidv4
};