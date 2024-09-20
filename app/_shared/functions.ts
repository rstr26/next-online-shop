import CryptoJs from 'crypto-js'
import { EncryptionKey } from './configs'


/**
 * 
 * @param value Value to be encrypted
 * @param key Encryption key, undefined = default encryption key
 * @returns {string}
 */
export function EncryptStr(value: string, key?: string){
    const k = key || EncryptionKey()
    var cipher = CryptoJs.AES.encrypt(value, k)
    
    return cipher.toString()
}