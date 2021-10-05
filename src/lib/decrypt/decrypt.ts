import crypto from 'crypto';

const ALGORITHM = 'aes-128-cbc';

export const decrypt = <Result>(
  source: string,
  key: string,
  iv: string
): Result => {
  const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);

  let decrypted = decipher.update(source, 'base64', 'utf8');
  decrypted += decipher.final('utf8');

  return JSON.parse(decrypted);
};
