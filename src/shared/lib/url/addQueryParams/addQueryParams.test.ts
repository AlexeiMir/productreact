import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toBe('?test=value');
    });

    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value',
            second: 'ale',
        });
        expect(params).toBe('?test=value&second=ale');
    });

    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined,
        });
        expect(params).toBe('?test=value');
    });
});
