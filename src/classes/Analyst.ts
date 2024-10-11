import Employee from './Employee.js';

class Analyst extends Employee {
  certifications: String[];

  constructor(firstName: string, lastName: string, salary: number, title: string, certifications: String[]) {
    super(firstName, lastName, salary, title);

    this.certifications = certifications;
  }
}

export default Analyst;