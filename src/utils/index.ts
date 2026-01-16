import crypto from 'crypto';

const hash = (str: string) => {
  return crypto.createHash('md5').update(str).digest('hex');
};

const capitalizeFirstLetter = (string: string) => {
  if (string.length === 0) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export { hash, capitalizeFirstLetter };
