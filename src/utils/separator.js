import { SEPARATE_STANDARD } from '../constants/MAGIC_NUMBER.js';

export function splitString(string) {
  return string.split(SEPARATE_STANDARD).map((str) => str.trim());
}
