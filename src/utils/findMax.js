export const findMaxValue = (arr, propertyName) => {
  return Math.max(...arr.map((item) => item[propertyName]));
};
