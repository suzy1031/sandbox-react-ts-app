/**
 * 2つの整数を足し算する
 * @see JSDocリファレンス https://www.typescriptlang.org/ja/docs/handbook/jsdoc-supported-types.html
 * @example
 * ```ts
 * const ten = plus(5, 5);
 * const zero = plus(5, -5);
 * ```
 */
export const plus = (v1: number, v2: number): number => {
  return v1 + v2;
};

/**
 * 2つの整数を引き算する
 * @example
 * ```ts
 * const ten = minus(15, 5);
 * const zero = minus(5, 5);
 * ```
 */
export const minus = (v1: number, v2: number): number => {
  return v1 - v2;
};

/**
 * 2つの整数を掛け算する
 * @example
 * ```ts
 * const ten = multi(5, 2);
 * const zero = multi(5, 0);
 * ```
 */
export const multi = (a: number, b: number): number => {
  return a * b;
};

/**
 * 2つの整数を割り算する
 * @example
 * ```ts
 * const ten = divide(20, 2);
 * const zero = divide(5, 0);
 */
export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }

  return a / b;
};
