import Employee from './Employee.js';
class Engineer extends Employee {
    programmingLanguages;
    constructor(firstName, lastName, salary, title, programmingLanguages) {
        super(firstName, lastName, salary, title);
        this.programmingLanguages = programmingLanguages;
    }
}
export default Engineer;
