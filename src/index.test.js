import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

test("Capitalize hayden to Hayden", () => {
  expect(capitalize("hayden")).toBe("Hayden");
});

test("Reverse Hayden to nedyaH", () => {
  expect(reverseString("Hayden")).toBe("nedyaH");
});

test("2 - 1 = 0", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("4 / 2 = 2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test("2 * 2 = 2", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("xyz to abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("HeLLo to KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Hello, World! to Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Analyze array equals", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
