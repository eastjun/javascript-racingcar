const { describe, expect, test } = require("@jest/globals");
const App = require("../src/App.js");

describe("readCarNameCallback 메서드에 대한 테스트 코드", () => {
  // given
  const app = new App();
  test("자동차 객체 생성 메서드 호출 테스트", () => {
    // given
    const createCarObjectSpy = jest.spyOn(app, "createCarObject");

    // when
    app.readCarNameCallback("pobi,jun,noah");

    // then
    expect(createCarObjectSpy).toHaveBeenCalledTimes(1);
  });

  test("자동차 객체 생성 이후 readTryCount 메서드 호출 테스트", () => {
    // given
    const readTryCountSpy = jest.spyOn(app, "readTryCount");

    // when
    app.readCarNameCallback("pobi,jun,noah");

    // then
    expect(readTryCountSpy).toHaveBeenCalledTimes(1);
  });
});
