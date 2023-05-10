/**
 * # le
 *
 * Returns a function that compares val1 <= val2.
 *
 * ## Example
 *
 * ```ts
 * callbacks.le(2)(1) // true
 * ```
 *
 * ```ts
 * callbacks.le(1)(1) // true
 * ```
 */
export const le = <T>(val2: T) => (val1: T) => {
    return val1 <= val2;
};
