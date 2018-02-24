export declare class BigInteger {
    private _sign;
    private _bits;
    static readonly MinusOne: BigInteger;
    static readonly One: BigInteger;
    static readonly Zero: BigInteger;
    constructor(value: number | string | ArrayBuffer | Uint8Array);
    static add(x: number | BigInteger, y: number | BigInteger): BigInteger;
    add(other: number | BigInteger): BigInteger;
    private static addTo(x, y, r);
    bitLength(): number;
    private static bitLengthInternal(w);
    private clamp();
    static compare(x: number | BigInteger, y: number | BigInteger): number;
    private static compareAbs(x, y);
    compareTo(other: number | BigInteger): number;
    private static create(sign, bits, clamp?);
    static divide(x: number | BigInteger, y: number | BigInteger): BigInteger;
    divide(other: number | BigInteger): BigInteger;
    static divRem(x: number | BigInteger, y: number | BigInteger): {
        result: BigInteger;
        remainder: BigInteger;
    };
    static equals(x: number | BigInteger, y: number | BigInteger): boolean;
    equals(other: number | BigInteger): boolean;
    static fromString(str: string, radix?: number): BigInteger;
    private fromString(str, radix?);
    static fromUint8Array(arr: Uint8Array, sign?: number, littleEndian?: boolean): BigInteger;
    private fromUint8Array(arr, sign?, littleEndian?);
    private fromUint64(i, sign);
    private static getActualLength(arr);
    private static getDoubleParts(dbl);
    getLowestSetBit(): number;
    isEven(): boolean;
    isZero(): boolean;
    leftShift(shift: number): BigInteger;
    static mod(x: number | BigInteger, y: number | BigInteger): BigInteger;
    mod(other: number | BigInteger): BigInteger;
    static modInverse(value: number | BigInteger, modulus: number | BigInteger): BigInteger;
    modInverse(modulus: number | BigInteger): BigInteger;
    static modPow(value: number | BigInteger, exponent: number | BigInteger, modulus: number | BigInteger): BigInteger;
    modPow(exponent: number | BigInteger, modulus: number | BigInteger): BigInteger;
    static multiply(x: number | BigInteger, y: number | BigInteger): BigInteger;
    multiply(other: number | BigInteger): BigInteger;
    private static multiplyTo(x, y, r, offset?);
    negate(): BigInteger;
    static parse(str: string): BigInteger;
    static pow(value: number | BigInteger, exponent: number): BigInteger;
    pow(exponent: number): BigInteger;
    static random(bitLength: number, rng?: any): BigInteger;
    static remainder(x: number | BigInteger, y: number | BigInteger): BigInteger;
    remainder(other: number | BigInteger): BigInteger;
    rightShift(shift: number): BigInteger;
    sign(): number;
    static subtract(x: number | BigInteger, y: number | BigInteger): BigInteger;
    subtract(other: number | BigInteger): BigInteger;
    private static subtractTo(x, y, r?);
    testBit(n: number): boolean;
    toInt32(): number;
    toString(radix?: number): string;
    toUint8Array(littleEndian?: boolean, length?: number): Uint8Array;
}
