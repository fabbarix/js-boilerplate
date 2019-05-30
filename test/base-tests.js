import { expect } from 'chai';
import { describe, it } from 'mocha';
import { Calculator } from '../src';

describe('Calculator', function() {
    describe('#add', function() {
        
        let calculator;

        before(() => {
            calculator = new Calculator();
        });

        it('Should always fail', function() {
            expect(calculator.add(3,2)).to.equal(10);    
        });

        it('Should always succeed', function() {
            expect(calculator.add(3,2)).to.equal(5);    
        });

        it('Should always fail async', function(done) {
            setTimeout(() => {
                expect(calculator.add(3,2)).to.equal(10);    
                done();
            }, (100));
        });
        it('Should always succeed async', function(done) {
            setTimeout(() => {
                expect(calculator.add(3,2)).to.equal(5);    
                done();
            }, (100));
        });
    });
});
