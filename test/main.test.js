import { Main } from '../src';

let simpleExpressionRegex = /\s*\d+\s*(\+|-)\s*\d+\s*\=\s*-?\d+/;

describe('Main', () => {
    test('Main: the main method outputs some sample calculations.', () => {
        jest.spyOn(global.console, 'log').mockImplementation((msg) => {
            expect(msg).toMatch(simpleExpressionRegex);
        });
        Main.run();
    });
});