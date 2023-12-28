export const plus = (v1: number, v2: number) => {
  return v1 + v2;
};

export const minus = (v1: number, v2: number) => {
  return v1 - v2;
};

export const multi = (a: number, b: number): number => {
  return a * b;
};

export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};
