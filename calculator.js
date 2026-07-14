// 더하기 함수
const add = (a, b) => {
  return a + b;
};

// 빼기 함수
const substract = (a, b) => {
  return a - b;
};

// 곱하기 함수
const multiply = (a, b) => {
  return a * b;
};

// 나누기 함수
const divide = (a, b) => {
  if (b === 0) {
    // 분모가 0일때는 나누기 함수가 작동하는걸 차단
    throw new Error();
  }
  return a / b;
};

// 새로운 기능 추가
