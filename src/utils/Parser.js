export const Parser = {
  splitName: string => {
    return string.split(',').map(name => name.trim());
  },
  toNumber: string => Number(string),
};
