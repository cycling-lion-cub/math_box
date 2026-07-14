// 덧셈
const add = (a, b) => {
  return a + b;
};

// 뺄셈
const substract = (a, b) => {
  return a - b;
};

// 곱셈
const multiply = (a, b) => {
  return a * b;
};

// 나눗셈
const divide = (a, b) => {
  if (b === 0) {
    // 분모가 0일때는 나누기가 진행되지 않도록 차단
    throw new Error();
  }
  return a / b;
};

// 새로운 기능 추가
const divide_premium = (a, b) => {
  return a / b;
};
