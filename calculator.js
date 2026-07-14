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
    throw new Error();
  }
  return a / b;
};
