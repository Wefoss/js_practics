class User {
  constructor(name, surName) {
    this.name = name;
    this.surName = surName;
  }

  get getSurName() {
    return this.surName;
  }

  set setSurName(val) {
    this.isValid(val);
    this.surName = val;
  }

  get getName() {
    return this.name;
  }

  set setName(val) {
    this.isValid(val);
    this.name = val;
  }

  getFullName() {
    return `${this.name} ${this.surName}`;
  }

  isValid(val) {
    if (!isNaN(Number(val))) {
      throw new TypeError("Must be a string");
    }
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
    const date = new Date("03,20,2014");
    return date.getFullYear() - this._yearOfAdmission;
  }
}

const student = new Student("Arya", "Stark", 3);

class Groupe {
  constructor(groupeName, arrStudents) {
    this._groupeName = groupeName;
    this._arrStudents = arrStudents;
  }

  get getGroupeName() {
    return this._groupeName;
  }

  set setGroupeName(val) {
    if(typeof val === 'string' && val.length) {
      this._groupeName = val;
    } else throw new TypeError("Write correct groupe name")
    
  }

  get getArrStudents() {
    return this._arrStudents;
  }

  set setArrStudents(val) {
    if (
     this.checkCorrectArray(val)
    ) {
      this._arrStudents = val;
    } else
      throw new TypeError("Must be Array also includes surname and first name");
  }

  showStudents() {
    let result = [];
    for (let i = 0; i < this._arrStudents.length; i++) {
      const item = this._arrStudents[i].toLowerCase().split(" ");
      const [one, tho] = item;
      result.push(this.correctStr(one, tho));
    }
    return result;
  }

  correctStr(first, last) {
    return `${first.slice(0, 1).toUpperCase() + first.slice(1)} ${last
      .slice(0, 1)
      .toUpperCase()}.`;
  }

  checkCorrectArray(val) {
    return  Object.prototype.toString.call(val) === "[object Array]" &&
    val.join(" ").split(" ").length%2 === 0 && val.every(el => typeof el === "string")
  }
}
const students = ["joHn Snow", "arya Stark"];
const groupe = new Groupe("groupe1", students);



