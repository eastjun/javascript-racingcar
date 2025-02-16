import { SEPARATE_STANDARD } from '../constants/MAGIC_NUMBER';

export function splitString(string) {
  return string.split(SEPARATE_STANDARD).map((str) => str.trim());
}
