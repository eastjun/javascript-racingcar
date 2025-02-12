# javascript-racingcar

## 📍프로그램 개요

---

자동차 이름과 반복 횟수를 입력받아 경주를 진행하여 우승자를 출력하는 프로그램

## 📁 파일구조

src/
│── model/
│ ├── Car.js
│ ├── ErrorMessage.js
│ ├── SystemMessage.js
│
│── view/
│ ├── InputView.js
│ ├── OutputView.js
│
│── validate/
│ ├── Validation.js
│
│── service/
│
├── index.js

## 🛠️ 기능구현

---

- [x] 자동차 이름 입력 : 쉼표 기준으로 이름을 분리
- [ ] 자동차 이름 유효성 검사
  - [ ] split 통해 parsing
- [x] 반복할 횟수 입력
- [ ] 반복할 횟수 유효성 검사
  - [] Number(), isNaN
- [ ] 매 횟수마다 랜덤 숫자 발행
  - [ ] math.floor, Math.random()을 통해 랜덤값을 불러옴
  - [ ] 랜덤 숫자가 4이상일 경우 전진
  - [ ] 반복문으로 move()를 통해 차를 전진
- [ ] 전진한 총 position을 불러온다
- [ ] 자동차 이름과 전진한 횟수를 -로 출력한다
  - [ ] repeat()를 사용한다.
- [ ] 우승자를 판별한다
  - [ ] max, reduce로 우승자를 정한다.
- [ ] 우승자를 출력한다
  - [ ] 1명 이상인 경우 쉼표로 구분하여 출력한다
    - [ ] join(', ')으로 출력한다.
- [ ] 잘못된 값을 입력했을 경우 에러메세지를 출력하고 다시 입력을 받는다.
  - [ ] 리트라이 로직을 작성한다(while)

## ⚠️ 에러 처리

---

### 자동차 이름 입력

- [x] 자동차 이름이 공백인 경우 에러를 출력한다
- [x] 자동차 이름이 5자 초과인 경우 에러를 출력한다
- [x] 자동차 이름에 중복되는 닉네임이 있는 경우 에러를 출력한다

### 이동 횟수 입력

- [x] 이동 횟수가 숫자가 아닌 경우 에러를 출력한다
- [x] 음수인 경우 에러를 출력한다.
