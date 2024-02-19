# 기능 목록

## 1. 사용자에게 자동차 이름을 입력을 받는다.

- 예시

```
경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).
```

### **❗️예외상황❗️**

1. 경주할 자동차의 이름은 최소 0자 이상, 5자 이하여야한다. 이름의 글자수가 범위를 벗어났을시에 에러메세지를 보여주고 다시 입력 받는다.

2. 특수문자를 자동차 이름에 부여할수 없다. 만약 특수문자를 입력했을시에 에러메세지를 보여주고 다시 입력 받는다.

### **❗️주의사항❗️**

2. 공백을 입력했을시, 자동차에 이름을 부여하지 않은 것이다. 그러므로 프로그램 내에서 사용자 이름에 대한 임의 문자열을 제공해주어야한다.

```
',pobi' 는 'user1,pobi'로 변환된다.
```

## 2. 사용자에게 시도 횟수를 입력 받는다.

- 예시

```
시도할 횟수는 몇 회인가요?
5
```

### **❗️예외상황❗️**

1. 시도 횟수는 자연수여야한다. 만약 그 외의 범위를 벗어난 숫자가 입력 됐을시, 예외처리하고 그부분부터 다시 입력 받는다.

## 3. 게임 시작 메세지를 출력한다.

- 예시

```
실행 결과
```

## 4. 진행 결과를 출력한다.

```
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----
```

## 5. 최종 우승자를 출력한다.

- 예시

```
최종 우승자: pobi, jun
```

---

## 총 출력 예시

```
경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자: pobi, jun

```

---

## 폴더 구조

```
src
 ┣ constants
 ┃ ┣ configs
 ┃ ┃ ┣ gameCondition.js
 ┃ ┃ ┣ randomCarNameConfig.js
 ┃ ┃ ┗ regexConfig.js
 ┃ ┣ 📂delimiters
 ┃ ┃ ┗ delimter.js
 ┃ ┗ 📂messages
 ┃ ┃ ┣ errorMessage.js
 ┃ ┃ ┣ progressMessage.js
 ┃ ┃ ┗ resultMessage.js
 ┣ domains
 ┃ ┣ Game.js
 ┃ ┗ ScoreBoard.js
 ┣ errors
 ┃ ┗ AppError.js
 ┣ services
 ┃ ┗ makeRandomCarName.js
 ┣ utils
 ┃ ┣ validate
 ┃ ┃ ┗ validateFunctions.js
 ┃ ┣ asyncFunctionHandlerWithError.js
 ┃ ┣ asyncReadLineHandler.js
 ┃ ┣ deepFeeze.js
 ┃ ┗ generateRandomNumberFromRange.js
 ┣ validator
 ┃ ┗ Validator.js
 ┣ views
 ┃ ┣ InputView.js
 ┃ ┗ OutputView.js
 ┣ App.js
 ┗ index.js
```

---

## coverage

```
-------------------------|---------|----------|---------|---------|-------------------
File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------------|---------|----------|---------|---------|-------------------
All files                |    92.3 |    76.92 |   83.33 |    92.3 |
 constants/configs       |     100 |      100 |     100 |     100 |
  gameCondition.js       |     100 |      100 |     100 |     100 |
  randomCarNameConfig.js |     100 |      100 |     100 |     100 |
  regexConfig.js         |     100 |      100 |     100 |     100 |
 constants/delimiters    |     100 |      100 |     100 |     100 |
  delimter.js            |     100 |      100 |     100 |     100 |
 constants/messages      |     100 |      100 |     100 |     100 |
  errorMessage.js        |     100 |      100 |     100 |     100 |
 domains                 |     100 |      100 |     100 |     100 |
  ScoreBoard.js          |     100 |      100 |     100 |     100 |
 errors                  |     100 |      100 |     100 |     100 |
  AppError.js            |     100 |      100 |     100 |     100 |
 utils                   |     100 |      100 |     100 |     100 |
  deepFeeze.js           |     100 |      100 |     100 |     100 |
 utils/validate          |      84 |    72.72 |   66.66 |      84 |
  validateFunctions.js   |      84 |    72.72 |   66.66 |      84 | 7-8,19,35
 validator               |     100 |      100 |     100 |     100 |
  Validator.js           |     100 |      100 |     100 |     100 |
-------------------------|---------|----------|---------|---------|-------------------
```
