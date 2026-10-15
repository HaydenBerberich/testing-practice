//import "./styles.css";

export const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export const reverseString = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

export const calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  divide(a, b) {
    return a / b;
  },

  multiply(a, b) {
    return a * b;
  },
};

export const caesarCipher = (str, shift) => {
  let cipher = "";

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);

    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      if (code >= 65 && code <= 90) {
        code = ((code - 65 + shift) % 26) + 65;
      } else {
        code = ((code - 97 + shift) % 26) + 97;
      }
    }

    cipher += String.fromCharCode(code);
  }

  return cipher;
};

export const analyzeArray = (arr) => {
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;

  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
    sum += num;
  }

  return {
    min,
    max,
    average: sum / arr.length,
    length: arr.length,
  };
};
