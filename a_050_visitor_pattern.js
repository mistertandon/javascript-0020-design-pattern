function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
}

Employee.prototype = {
  getSalary: function () {
    console.log(` Employee name: ${this.name}\n Salary: ${this.salary}`);
    return this.salary;
  },
  setSalary: function (salary) {
    this.salary = salary;
  },
  accept: function (visitorFunction) {
    visitorFunction(this);
  },
};

function ExtraSalary(employee) {
  employee.setSalary(2 * employee.getSalary());
}

let parvesh = new Employee("Parvesh", 180000);
parvesh.accept(ExtraSalary);
parvesh.getSalary();
