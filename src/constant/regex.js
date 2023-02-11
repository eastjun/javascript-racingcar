const REGEX = Object.freeze({
  carName: /^[1-9|a-z|A-Z|가-힣]+$/,
  onlyNumbers: /^[0-9]+$/,
  korean: /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+$/,
  english: /^[a-zA-Z]+$/,
  number: /^[0-9]+$/,
});

module.exports = {
  REGEX,
};
