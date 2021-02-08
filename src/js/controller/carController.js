// 자동차와 관련된 검증, 조작 및 뷰?

// 자동차 이름 검증 함수

// 공백 이름 검증 함수
// 리팩토링 할 때 수정 (함수 표현 방식)
function isAlphanumeric(input) {
  return /^[a-zA-Z0-9]+$/.test(input);
}

function isNotDuplicatedArray(array){
  return Array.from(new Set(array)).length === array.length;
}

// 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
const isValidCarNames = function(carNamesInput) {
  return isNotDuplicatedArray(carNamesInput) && carNamesInput.every(
    (carName) =>
      1 <= carName.length && carName.length <= 5 && isAlphanumeric(carName)
  );
};

export const handleCarNamesSubmit = function () {
  const carNamesInput = document
    .querySelector("#car-names-input")
    .value.split(",");
  // 자동차 이름 검증
  if (!isValidCarNames(carNamesInput)) {
    alert("유효한 자동차이름이 아닙니다.");
    return;
  }

  // Car 생성
};
