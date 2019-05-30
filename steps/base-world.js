import { setWorldConstructor } from  "cucumber";

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
  }

  /**
   * In real life this would be coming from your source code
   * business logic.
   */
  add() {
    this._sum = this._firstNumber + this._secondNumber;
  }

}

setWorldConstructor(BaseWorld);