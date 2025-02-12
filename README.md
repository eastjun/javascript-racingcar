# 자동차 경주 기능 구현

## 기능

### 1. 경주할 자동차 입력받기

- 자동차 유효성 검사
  - 이름은 5글자 이하여야 한다.
  - 자동차 갯수는 최소 2개, 최대 100개
  - 같은 자동차 이름은 입력할 수 없다.

```
# 입력값 형식
pobi,woni,jun
```

<br>

### 2. 시도할 횟수 입력받기

- 시도 횟수 유효성 검사
  - 최소 1, 최대 100
  - 양의 정수여야 한다.

<br>

### 3. 시도 횟수만큼 실행 및 출력

##### 전진

- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우

##### 출력

```
# 출력값 형식
pobi : --
woni : ----
jun : ---
```

<br>

### 4. 최종 우승자 출력

- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

```
# 단독 우승자 안내 문구
최종 우승자 : pobi

# 공동 우승자 안내 문구
최종 우승자 : pobi, jun
```

<br>

### 5. 예외 사항 처리하기

- 사용자가 잘못된 입력 값을 작성한 경우 에러 메시지를 보여준다.
- 사용자가 다시 입력할 수 있게 한다.
