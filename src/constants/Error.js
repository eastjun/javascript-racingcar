const ERROR = {
    CODE: {
        IS_STRING_LENGTH_OVER: 'IS_STRING_LENGTH_OVER',
        IS_ARRAY_LENGTH_OVER: 'IS_ARRAY_LENGTH_OVER',
        IS_RANGE_OVER: 'IS_RANGE_OVER',
        IS_DECIMAL: `IS_DECIMAL`,
        IS_DUPLICATE: `IS_DUPLICATE`,
        IS_NUMBER: `IS_NUMBER`,
        IS_EMPTY: `IS_EMPTY`,
    },
    MESSAGE: {
        INPUT_NAME: {
            IS_STRING_LENGTH_OVER: '[ERROR] 5글자 이하의 이름을 사용해 주세요.',
            IS_ARRAY_LENGTH_OVER: '[ERROR] 40명 이하의 인원을 입력해주세요.',
            IS_RANGE_OVER: (min, max) => `[ERROR] ${min}보다 크고 ${max}보다 작은 값을 입력해주세요.`,
            IS_DECIMAL: `[ERROR] 정수를 입력해주세요.`,
            IS_DUPLICATE: `[ERROR] 중복된 입력값이 있습니다.`,
            IS_NUMBER: `[ERROR] 숫자를 입력해주세요.`,
            IS_EMPTY: `[ERROR] 입력값이 비어있습니다.`,
        },
        INPUT_TRY_NUMBER: {
            IS_STRING_LENGTH_OVER: '[ERROR] 5글자 이하의 이름을 사용해 주세요.',
            IS_ARRAY_LENGTH_OVER: '[ERROR] 40명 이하의 인원을 입력해주세요.',
            IS_RANGE_OVER: (min, max) => `[ERROR] ${min}보다 크고 ${max}보다 작은 값을 입력해주세요.`,
            IS_DECIMAL: `[ERROR] 정수를 입력해주세요.`,
            IS_DUPLICATE: `[ERROR] 중복된 입력값이 있습니다.`,
            IS_NUMBER: `[ERROR] 숫자를 입력해주세요.`,
            IS_EMPTY: `[ERROR] 입력값이 비어있습니다.`,
        }
    }
}

export default ERROR;