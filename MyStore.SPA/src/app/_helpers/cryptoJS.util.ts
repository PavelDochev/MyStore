import * as CryptoJS from 'crypto-js';

export class CryptoJSUtils {

  public encrypt(privateKey:string,password: string): string {

    var ciphertext = CryptoJS.AES.encrypt(privateKey, password);
  
    return ciphertext;
  }

  public decrypt(encryptedKey:any,password: string): string {

    var decrypted = CryptoJS.AES.decrypt(encryptedKey.toString(),password);

    return decrypted.toString(CryptoJS.enc.Utf8);
  }
  
  public sha256(pass:string){
    return CryptoJS.SHA256(pass).toString(CryptoJS.enc.Hex);
  }
}