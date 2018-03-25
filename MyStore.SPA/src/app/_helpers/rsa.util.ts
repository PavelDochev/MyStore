import {Buffer} from 'buffer/';
import * as crypto from "crypto-browserify";

export class RsaService {

  public static encrypt(privateKey:string,plaintext: string): string {
    let buffer = new Buffer(plaintext);
    let encrypted = crypto.privateEncrypt(privateKey, buffer);

    return encrypted.toString('base64');
  }

  public static decrypt(publicKey:string,cypher: string): string {
    let buffer = Buffer.from(cypher, 'base64');
    let plaintext = crypto.publicDecrypt(publicKey, buffer);

    return plaintext.toString('utf8')
  }
}