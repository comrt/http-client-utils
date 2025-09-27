export function encode(text) {
    return Window.btoa(text);
}

export function decode(base64) {
    return String.fromCharCode(...Window.atob(base64));
}

export function encodeUrlSafe(text) {
    return Window.btoa(text)
        .replace(/\+/g, '-')  // Replace '+' with '-'
        .replace(/\//g, '_')  // Replace '/' with '_'
        .replace(/=+$/, '');  // Remove trailing '='
}

export function decodeFromUrlSafe(base64Url) {
    let base64 = base64Url
        .replace(/-/g, '+')  // Replace '-' with '+'
        .replace(/_/g, '/'); // Replace '_' with '/'
    // Pad with '=' to make length a multiple of 4
    while (base64.length % 4) {
        base64 += '=';
    }
    return decode(base64);
}
