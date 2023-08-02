type unknownFn = (arg: unknown) => unknown;

export function compose<T1, T2>(
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T2;

export function compose<T1, T2, T3>(
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T3;

export function compose<T1, T2, T3, T4>(
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T4;

export function compose<T1, T2, T3, T4, T5>(
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T5;

export function compose<T1, T2, T3, T4, T5, T6>(
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T6;

export function compose<T1, T2, T3, T4, T5, T6, T7>(
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T7;

export function compose<T1, T2, T3, T4, T5, T6, T7, T8>(
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T8;

export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T9;

export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T10;

export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11>(
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T11;

export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12>(
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T12;

export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13>(
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T13;

export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14>(
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T14;

export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15>(
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T15;

export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16>(
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T16;

export function compose<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17>(
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T17;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
>(
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T18;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
>(
    fn18: (arg18: T18) => T19,
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T19;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
>(
    fn19: (arg19: T19) => T20,
    fn18: (arg18: T18) => T19,
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T20;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
>(
    fn20: (arg20: T20) => T21,
    fn19: (arg19: T19) => T20,
    fn18: (arg18: T18) => T19,
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T21;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
>(
    fn21: (arg21: T21) => T22,
    fn20: (arg20: T20) => T21,
    fn19: (arg19: T19) => T20,
    fn18: (arg18: T18) => T19,
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T22;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
>(
    fn22: (arg22: T22) => T23,
    fn21: (arg21: T21) => T22,
    fn20: (arg20: T20) => T21,
    fn19: (arg19: T19) => T20,
    fn18: (arg18: T18) => T19,
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T23;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
>(
    fn23: (arg23: T23) => T24,
    fn22: (arg22: T22) => T23,
    fn21: (arg21: T21) => T22,
    fn20: (arg20: T20) => T21,
    fn19: (arg19: T19) => T20,
    fn18: (arg18: T18) => T19,
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T24;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
>(
    fn24: (arg24: T24) => T25,
    fn23: (arg23: T23) => T24,
    fn22: (arg22: T22) => T23,
    fn21: (arg21: T21) => T22,
    fn20: (arg20: T20) => T21,
    fn19: (arg19: T19) => T20,
    fn18: (arg18: T18) => T19,
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T25;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
>(
    fn25: (arg25: T25) => T26,
    fn24: (arg24: T24) => T25,
    fn23: (arg23: T23) => T24,
    fn22: (arg22: T22) => T23,
    fn21: (arg21: T21) => T22,
    fn20: (arg20: T20) => T21,
    fn19: (arg19: T19) => T20,
    fn18: (arg18: T18) => T19,
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T26;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
    T27,
>(
    fn26: (arg26: T26) => T27,
    fn25: (arg25: T25) => T26,
    fn24: (arg24: T24) => T25,
    fn23: (arg23: T23) => T24,
    fn22: (arg22: T22) => T23,
    fn21: (arg21: T21) => T22,
    fn20: (arg20: T20) => T21,
    fn19: (arg19: T19) => T20,
    fn18: (arg18: T18) => T19,
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T27;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
    T27,
    T28,
>(
    fn27: (arg27: T27) => T28,
    fn26: (arg26: T26) => T27,
    fn25: (arg25: T25) => T26,
    fn24: (arg24: T24) => T25,
    fn23: (arg23: T23) => T24,
    fn22: (arg22: T22) => T23,
    fn21: (arg21: T21) => T22,
    fn20: (arg20: T20) => T21,
    fn19: (arg19: T19) => T20,
    fn18: (arg18: T18) => T19,
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T28;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
    T27,
    T28,
    T29,
>(
    fn28: (arg28: T28) => T29,
    fn27: (arg27: T27) => T28,
    fn26: (arg26: T26) => T27,
    fn25: (arg25: T25) => T26,
    fn24: (arg24: T24) => T25,
    fn23: (arg23: T23) => T24,
    fn22: (arg22: T22) => T23,
    fn21: (arg21: T21) => T22,
    fn20: (arg20: T20) => T21,
    fn19: (arg19: T19) => T20,
    fn18: (arg18: T18) => T19,
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T29;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
    T27,
    T28,
    T29,
    T30,
>(
    fn29: (arg29: T29) => T30,
    fn28: (arg28: T28) => T29,
    fn27: (arg27: T27) => T28,
    fn26: (arg26: T26) => T27,
    fn25: (arg25: T25) => T26,
    fn24: (arg24: T24) => T25,
    fn23: (arg23: T23) => T24,
    fn22: (arg22: T22) => T23,
    fn21: (arg21: T21) => T22,
    fn20: (arg20: T20) => T21,
    fn19: (arg19: T19) => T20,
    fn18: (arg18: T18) => T19,
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T30;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
    T27,
    T28,
    T29,
    T30,
    T31,
>(
    fn30: (arg30: T30) => T31,
    fn29: (arg29: T29) => T30,
    fn28: (arg28: T28) => T29,
    fn27: (arg27: T27) => T28,
    fn26: (arg26: T26) => T27,
    fn25: (arg25: T25) => T26,
    fn24: (arg24: T24) => T25,
    fn23: (arg23: T23) => T24,
    fn22: (arg22: T22) => T23,
    fn21: (arg21: T21) => T22,
    fn20: (arg20: T20) => T21,
    fn19: (arg19: T19) => T20,
    fn18: (arg18: T18) => T19,
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T31;

export function compose<
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19,
    T20,
    T21,
    T22,
    T23,
    T24,
    T25,
    T26,
    T27,
    T28,
    T29,
    T30,
    T31,
    T32,
>(
    fn31: (arg31: T31) => T32,
    fn30: (arg30: T30) => T31,
    fn29: (arg29: T29) => T30,
    fn28: (arg28: T28) => T29,
    fn27: (arg27: T27) => T28,
    fn26: (arg26: T26) => T27,
    fn25: (arg25: T25) => T26,
    fn24: (arg24: T24) => T25,
    fn23: (arg23: T23) => T24,
    fn22: (arg22: T22) => T23,
    fn21: (arg21: T21) => T22,
    fn20: (arg20: T20) => T21,
    fn19: (arg19: T19) => T20,
    fn18: (arg18: T18) => T19,
    fn17: (arg17: T17) => T18,
    fn16: (arg16: T16) => T17,
    fn15: (arg15: T15) => T16,
    fn14: (arg14: T14) => T15,
    fn13: (arg13: T13) => T14,
    fn12: (arg12: T12) => T13,
    fn11: (arg11: T11) => T12,
    fn10: (arg10: T10) => T11,
    fn9: (arg9: T9) => T10,
    fn8: (arg8: T8) => T9,
    fn7: (arg7: T7) => T8,
    fn6: (arg6: T6) => T7,
    fn5: (arg5: T5) => T6,
    fn4: (arg4: T4) => T5,
    fn3: (arg3: T3) => T4,
    fn2: (arg2: T2) => T3,
    fn1: (arg1: T1) => T2,
): (initialValue: T1) => T32;

/**
 * # compose
 *
 * Returns a function that apply the result of each function to the next one in the opposite order they are defined.
 *
 * > Typescript does not infer the type of the function arguments as you would expect.
 * > You have to explicit type all but the first function argument 😰.
 *
 * ## Example
 *
 * ```ts
 * std.compose(
 *     value => `${value} is the result` // '5 is the result'
 *     (value: number) => value / 3, // 5
 *     (value: number) => value - 5, // 15
 *     (value: number) => value * 2, // 20
 * )(10) // '5 is the result'
 * ```
 */
export function compose(...fns: readonly unknownFn[]): unknownFn {
    return (initialParam) => fns.reduceRight((curr, fn) => fn(curr), initialParam);
}
