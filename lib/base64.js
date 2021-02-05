
// for nodejs < v15

function base64urlsafeEncode(s){
    return s
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

function base64urlsafeDecode(s){
    // urlsafe decoding
    return s
        .replace(/-/g, '+')
        .replace(/_/g, '\\');
}

module.exports = {
    base64urlsafeEncode: base64urlsafeEncode,
    base64urlsafeDecode: base64urlsafeDecode
};