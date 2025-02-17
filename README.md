# javascript-racingcar

# 기능 목록

1. 자동차 이름 입력

- [x] 자동차 이름 입력.
- [x] 쉼표(,)를 기준으로 구분
- [x] 1~5자가 아닌 것에 대한 예외처리
- [x] 이름 중복 예외처리
- [x] 빈 입력에 대한 예외처리
- [x] 자동차 수가 한명일 경우 예외처리

2. 시도 횟수 입력

- [x] 시도횟수 입력.
- [x] 시도횟수를 숫자로 변환
- [x] 20 이하가 아닌 것에 대한 예외처리
- [x] 자연수 입력이 아닌 것에 대한 예외처리

3. 전진하는 조건 설정

- [x] 랜덤 숫자 생성
- [x] 랜덤 숫자가 4 이상인지 판단
- [x] 4 이상 숫자에서 전진
- [x] 시도횟수 만큼 반복

4. 실행 결과 출력

- [x] 각 시도횟수별 실행 결과 출력

5. 우승자 선별

- [x] 우승자 선별
- [x] 다수의 우승자일 경우, 쉼표로 구분해서 출력. 단일 우승자의 경우, 이름만 출력

# 테스트 목록

1. Car

- 경주할 자동차 이름 입력 검증
  - [x] 자동차는 이름을 가져야한다.
  - [x] 자동차 이름은 1~5자여야 한다.
  - [x] 자동차는 쉼표를 기준으로 구분한다.
  - [x] 자동차는 2대 이상이어야 한다.
  - [x] 자동차 이름은 중복되면 안된다.
- 자동차가 잘 움직이는지 검증
  - [ ] 자동차는 4 이상의 숫자를 받으면 전진할 수 있다.

2. Race

- 경주 시도 횟수 입력 검증
  - [ ] 시도 횟수는 1~20 사이여야 한다.
  - [ ] 시도 횟수는 자연수로 입력해야 한다.
