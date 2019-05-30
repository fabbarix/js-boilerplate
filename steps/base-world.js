import { setWorldConstructor } from  "cucumber";
import { Calculator } from '../src/calculator';

class BaseWorld {

  set firstNumber(val) {
    this._firstNumber = val;
  }

  set secondNumber(val) {
    this._secondNumber = val;
  }

  get sum() {
    return this._sum;
  }
  
  constructor() {
    this._calc = new Calculator();
  }

  add() {
    this._sum = this._calc.add(this._firstNumber, this._secondNumber);
  }

}

setWorldConstructor(BaseWorld);