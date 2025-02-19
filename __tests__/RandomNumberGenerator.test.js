import randomNumberGenerator from "../src/util/RandomNumberGenerator.js";
import { systemConstants } from "../src/constants/systemConstants.js";
test("randomNumberGenerator는 0~9 사이 수를 생성해야 한다", () => {
  //given
  const number = randomNumberGenerator(
    systemConstants.MINIMUM_RANDOM_NUMBER,
    systemConstants.MAXIMUM_RANDOM_NUMBER
  );

  //then
  expect(Number.isInteger(number)).toBe(true);
  expect(number).toBeGreaterThanOrEqual(0);
  expect(number).toBeLessThanOrEqual(9);
});
