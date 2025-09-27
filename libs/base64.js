/**
 * Encodes a string to base64
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa
 *
 * @param {string} text to encode
 * @returns {string} base64 encoded text
 */
export function encode(text) {
    return Window.btoa(text);
}

/**
 * Decodes a base64 string to text
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
 *
 * @param {string} base64 encoded text
 * returns {string} the decoded text
 */
export function decode(base64) {
    return String.fromCharCode(...Window.atob(base64));
}

/**
 * Encodes a string to base64 and replaces '+' and '/' with '-' and '_' respectively
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa
 *
 * @param {string} text to encode
 * returns {string} base64UrlSafe encoded text
 */
export function encodeUrlSafe(text) {
    return encode(text)
        .replace(/\+/g, '-')  // Replace '+' with '-'
        .replace(/\//g, '_')  // Replace '/' with '_'
        .replace(/=+$/, '');  // Remove trailing '='
}

/**
 * Decodes a base64 string from a URL-safe format to text
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
 *
 * @param {string} base64Url
 * returns {string} the decoded text
 */
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
