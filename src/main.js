import { Calculator } from './calculator';

export class Main {
    static run() {
        let calculator = new Calculator();
        console.log(`3+2 = ${calculator.add(3,2)}`);
        console.log(`3-2 = ${calculator.sub(3,2)}`);
        console.log(`2 - 3 = ${calculator.sub(2,3)}`);
    }
}

Main.run();
