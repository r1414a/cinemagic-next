import crypto from "crypto";
import bcrypt from "bcrypt";

export default async function generateOTP(){
    const plain = crypto.randomInt(100000,999999).toString();
     const hash = await bcrypt.hash(plain, 10);
  return { plain, hash };
    
}