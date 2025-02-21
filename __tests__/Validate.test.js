import Validate from '../src/domain/Validate.js'

test("공백 입력 시 에러 발생", () => {
  expect(() => {
    Validate.isEmpty('');
  }).toThrow("[ERROR] 공백이 입력되었습니다.");
})

test("자동차 이름 글자수 5자 초과시 에러 발생", () => {
  expect(() => {
    Validate.carNameLength('ABCDEF');
  }).toThrow("[ERROR] 이름 글자수가 5자를 초과하였습니다.");
})

test("숫자가 아닌 입력 시 에러 발생", () => {
  expect(() => {
    Validate.isNumber(Number("ABCDEF"));
  }).toThrow("[ERROR] 숫자가 아닙니다.");
})

test("0 이하의 숫자 입력 시 에러 발생", () => {
  expect(() => {
    Validate.isPositiveNumber(0);
  }).toThrow("[ERROR] 0 이하의 숫자 입니다.");
})

test("정수가 아닌 입력 시 에러 발생", () => {
  expect(() => {
    Validate.isInteger(3.1);
  }).toThrow("[ERROR] 정수가 아닙니다.");
})

test("1개의 자동차 입력 시 에러 발생", () => {
  expect(() => {
    Validate.carCount(['car1']);
  }).toThrow("[ERROR] 2개 이상의 자동차를 입력해 주세요.");
})