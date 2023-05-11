/**
 * # isValid
 *
 * Returns false for *undefined* and *null*. Returns true otherwise.
 *
 * ## Example
 *
 * ```ts
 * str.isValid(undefined) // false
 * str.isValid(null) // false
 * ```
 *
 * ```ts
 * str.isValid('') // true
 * str.isValid(' ') // true
 * str.isValid('Lorem ipsum') // true
 * ```
 */
export function isValid(str: string | undefined | null): boolean {
    if (typeof str !== "string") {
        return false;
    }
    if (str === "") {
        return true;
    }
    return !!str;
}
