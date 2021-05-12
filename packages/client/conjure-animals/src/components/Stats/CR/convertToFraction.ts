/**
 * Convert a number to a fraction string
 * @see https://danielbachhuber.com/2019/02/04/javascript-number-fraction/
 */
export default function convertToFraction(amount: number | null): string {
    if (amount === null) return '';
    /**
     * We're dealing with a whole number, just return
     */
    if (amount % 1 === 0) {
        return amount + '';
    }

    const len = amount.toString().length - 2;
    let denominator = Math.pow(10, len);
    let numerator = amount * denominator;
    const divisor = gcd(numerator, denominator);
    numerator /= divisor;
    denominator /= divisor;
    let base = 0;

    /**
     * In a scenario like 3/2, convert to 1 1/2
     * by pulling out the base number and reducing the numerator.
     */
    if (numerator > denominator) {
        base = Math.floor(numerator / denominator);
        numerator -= base * denominator;
    }
    let newAmount = Math.floor(numerator) + '/' + Math.floor(denominator);
    if (base) {
        newAmount = base + ' ' + amount;
    }
    return newAmount;
}

/**
 * @see https://stackoverflow.com/a/23575406
 */
function gcd(a: number, b: number): number {
    if (b < 0.0000001) {
        return a;
    }
    return gcd(b, Math.floor(a % b));
}
