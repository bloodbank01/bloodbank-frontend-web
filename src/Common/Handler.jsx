import moment from "moment";

const ecy_algo = import.meta.env.VITE_ECY_ALGO;
const ecy_key = import.meta.env.VITE_ECY_KEY;
const ecy_iv = import.meta.env.VITE_ECY_IV;

function strToBuffer(str) {
    return new TextEncoder().encode(str);
}

function bufferToBase64(buffer) {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)));
}

function base64ToBuffer(base64) {
    const binary = atob(base64);
    return new Uint8Array([...binary].map(char => char.charCodeAt(0)));
}

export default class Handler {

    static async setItem(key, value) {
        const token = await this.encrypt(JSON.stringify(value));
        localStorage.setItem(key, encodeURIComponent(token));
    }

    static async getItem(key) {
        const token = localStorage.getItem(key);
        if (!token) return null;
        const decrypted = await this.decrypt(decodeURIComponent(token));
        return JSON.parse(decrypted);
    }

    static async encrypt(value) {
        const iv = strToBuffer(ecy_iv);
        const keyBuffer = strToBuffer(ecy_key);
        const cryptoKey = await crypto.subtle.importKey("raw", keyBuffer, { name: ecy_algo }, false, ["encrypt"]);
        const encrypted = await crypto.subtle.encrypt({ name: ecy_algo, iv }, cryptoKey, strToBuffer(value));
        return bufferToBase64(encrypted);
    }

    static async decrypt(value) {
        const iv = strToBuffer(ecy_iv);
        const keyBuffer = strToBuffer(ecy_key);
        const cryptoKey = await crypto.subtle.importKey("raw", keyBuffer, { name: ecy_algo }, false, ["decrypt"]);
        const decrypted = await crypto.subtle.decrypt({ name: ecy_algo, iv }, cryptoKey, base64ToBuffer(value));
        return new TextDecoder().decode(decrypted);
    }

    static async capitalizeFirstLetter(str) {
        return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }

    static async dateFormate(date) {
        if (date) {
            const valid = moment(date, ["DD-MM-YYYY", "MM-DD-YYYY", "YYYY-DD-MM", "YYYY-MM-DD"], true).isValid();
            return valid ? moment(date).format("YYYY-MM-DD") : null;
        }
        return null;
    }
}
