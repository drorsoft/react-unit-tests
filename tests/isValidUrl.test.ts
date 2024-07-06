import { describe, expect, it } from 'vitest';
import { isValidUrl } from '../src/utils/isValidUrl';

describe('Is valid Url', () => {
    it('should return false for an invalid URL', () => {
        const url = 'invalid_url';
        expect(isValidUrl(url)).toBe(false);
    });

    it('should return true for a URL without protocol', () => {
        const url = 'www.example.com';
        expect(isValidUrl(url)).toBe(true);
    });
});
