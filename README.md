# javascript-racingcar

## 🔽 기능 요구 사항
자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
- 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 입력 값을 작성한 경우 에러 메시지를 보여주고, 다시 입력할 수 있게 한다.


## 🔽 프로젝트 폴더 구조
📦 src
 ┣ 📂domain         # 핵심 비즈니스 로직(도메인) 관련 파일
 ┃ ┣ Car.js
 ┃ ┣ RacingcarManager.js
 ┃ ┗ Winner.js
 ┣ 📂ui             # 사용자 입력/출력 관련 파일
 ┃ ┣ InputView.js
 ┃ ┣ OutputView.js
 ┃ ┗ ReadLineAsync.js
 ┣ 📂utils          # 범용적인 유틸(도메인과 직접 상관없는 로직)
 ┃ ┗ Validate.js
 ┣ App.js           # 전체 흐름을 초기화/실행하는 진입점
 ┗ index.js         # 프로그램 시작점

📦 __tests__
 ┣ Car.test.js
 ┣ RacingcarManager.test.js
 ┣ Winner.test.js
 ┗ Validate.test.js


## 🔽 기능 구현 목록
위 기능 요구 사항에 맞게 구현할 기능 목록을 Domain 과 UI로 나눠 작성한다.

1. 사용자에게 자동차를 입력받는다. (UI)
   - 나열된 자동차 이름을 입력받는다.

2. 입력받은 자동차가 가능한 이름인지 확인한다. (Domain)
   #### (예외 사항)
   - 공백 입력
   - 이름 길이 1글자 미만
   - 이름 길이 5글자 초과
   - '경주'이기에 입력한 자동차 수가 2대 이상이 아닌 경우

3. 입력받은 자동차 이름으로 자동차를 생성한다. (Domain) → `Car`
   - 쉼표를 기준으로 자동차 이름에 대해 자동차를 생성한다. (Domain)

4. 사용자에게 경주 횟수를 입력받는다. (UI)

5. 입력받은 경주 횟수가 올바른지 확인한다. (Domain)
   #### (예외 사항)
   - 공백 입력
   - 0 이하의 숫자
   - 숫자가 아닌 입력
   - 정수가 아닌 소수 입력

6. 각 자동차의 전진 조건을 구한다. (Domain)
   - 0에서 9 사이에서 무작위값이 4 이상일 경우, 전진
   - 3 이하인 경우 멈춤

7. 한 회차 실행 결과 출력한다. (UI)

8. 입력받은 경주 횟수만큼 6번, 7번 기능을 반복한다. (Domain)

9. 우승자(가장 멀리간 자동차)를 구한다. (Domain) → `Winner`
   - 우승자는 한 대 이상 가능하다.

10. 최종 우승자를 출력한다. (UI)
   - 우승자 여러명일 경우 쉼표로 구분해서 출력한다.
   
