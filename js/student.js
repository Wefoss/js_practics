

class User {
  constructor(name, surName) {
    this.name = name;
    this.surName = surName;
  }

  getFullName() {
    return `${this.name} ${this.surName}`;
  }
}

const user = new User("john", "snow");

class Student extends User {
  constructor(name, surName, yearOfAdmission) {
    super(name, surName);
    this._yearOfAdmission = yearOfAdmission;
  }

  get yearOfAdmission() {
    return this._yearOfAdmission;
  }

  set yearOfAdmission(val) {
    if (val > 5 || val < 1 || isNaN(Number(val))) {
      throw new TypeError("add current Year");
    }
    this._yearOfAdmission = val;
  }

  getCourse() {
    let date = new Date('03,20,2014');
    return date.getFullYear() - this._yearOfAdmission;
  }
}

const student = new Student("Arya", "Stark", 3);

class Groupe {
  constructor(groupeName, arrStudents) {
    this.groupeName = groupeName;
    this.arrStudents = arrStudents;
  }
  showStudents() {
    let result = []
    for (let i = 0; i < this.arrStudents.length; i++) {
      let item = this.arrStudents[i].toLowerCase().split(" ");
      const [one, tho] = item;
      result.push(this.correctStr(one, tho)) 
    }
    return result
  }

  correctStr(first, last) {
    return `${first.slice(0, 1).toUpperCase() + first.slice(1)} ${last
      .slice(0, 1)
      .toUpperCase()}.`;
  }
}
const students = ["joHn Snow", "arya Stark"]
const groupe = new Groupe("groupe1", students);