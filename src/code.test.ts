import { contains, factorial, isPalindrome, reverseString, sumDigits } from './code';

describe('factorial', () => {
    test('it works', () => {
        expect(factorial(10)).toBe(3628800);
    });

    test('it handles 1', () => {
        expect(factorial(1)).toBe(1);
    });
});

describe('sumDigits', () => {
    test('it works', () => {
        expect(sumDigits(8423)).toBe(17);
    });

    test('it handles 1 digit', () => {
        expect(sumDigits(6)).toBe(6);
    });
});

describe('reverseString', () => {
    test('it works', () => {
        expect(reverseString('abcd')).toBe('dcba');
    });

    test('it handles 1 char', () => {
        expect(reverseString('a')).toBe('a');
    });
});

describe('isPalindrome', () => {
    test('it returns true on palindromes', () => {
        expect(isPalindrome('racecar')).toBe(true);
    });

    test('it returns false on not palindromes', () => {
        expect(isPalindrome('police')).toBe(false);
    });

    test('it returns false on not palindrome even if it is close', () => {
        expect(isPalindrome('abcdecba')).toBe(false);
    });

    test('it handles 1 char', () => {
        expect(isPalindrome('a')).toBe(true);
    });
});

describe('contains', () => {
    test('it works', () => {
        expect(contains('bat', 'sabbatical')).toBe(true);
    });

    test('it returns true if they are the same string', () => {
        expect(contains('bat', 'bat')).toBe(true);
    });

    test('it returns true if the match is at the end of the word', () => {
        expect(contains('fish', 'catfish')).toBe(true);
    });
});
