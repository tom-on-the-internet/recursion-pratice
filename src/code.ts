export function factorial(num: number): number {
    if (num === 1) {
        return 1;
    }

    return num * factorial(num - 1);
}

export function sumDigits(num: number): number {
    if (num.toString().length === 1) {
        return num;
    }

    return parseInt(num.toString()[0]) + sumDigits(parseInt(num.toString().substr(1)));
}

export function reverseString(str: string): string {
    if (str.length === 1) {
        return str;
    }

    return str[str.length - 1] + reverseString(str.substr(0, str.length - 1));
}

export function isPalindrome(str: string): boolean {
    if (str.length === 1) {
        return true;
    }

    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    return isPalindrome(str.substr(1, str.length - 2));
}

export function contains(needle: string, haystack: string): boolean {
    if (needle === haystack.substr(0, needle.length)) {
        return true;
    }

    return contains(needle, haystack.substr(1));
}
