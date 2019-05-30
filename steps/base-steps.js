import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';

Given('that I have {int} as the first number', function (int) {
    this.firstNumber = int;
});

Given('{int} as the second number', function (int) {
    this.secondNumber = int;
});

When('I add them together', function () {
    this.add();
});

Then('I expect the sum to be {int}', function (int) {
    expect(this.sum).to.equal(int);
});