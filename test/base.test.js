import { Calculator } from '../src/calculator.js';

describe('Calculator', () => {
    let calculator = new Calculator();

    describe('#add', () => {
        test('Calculator: adding 3+2 should equal 5', () => {
            expect(calculator.add(3, 2)).toBe(5);
        });

        test('Calculator: adding 3+5 should equal 8 [Async]', (done) => {
            setTimeout(() => {
                expect(calculator.add(3, 5)).toBe(8);
                done();
            }, 200);
        });
    });

    describe('#sub', () => {
        test('Calculator: subtracting 3-2 should equal 1', () => {
            expect(calculator.sub(3, 2)).toBe(1);
        });

        test('Calculator: subtracting 2-3 should equal -1 [Async]', (done) => {
            setTimeout(() => {
                expect(calculator.sub(2, 3)).toBe(-1);
                done();
            }, 200);
        });
    });

});

