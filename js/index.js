//  функции стрелки, рекурсия №1
function recursione(num) {
  if (num < 1) {
    return "()";
  }
  num = recursione(num - 1, right = "", left = "");
  right += ")";
  left += "(";

  return left + right;
}
console.log(recursione(5));

let arrs = [1, 2, 3, 4, 5, 6, 7];
let max = Math.max(...arrs);
let min = Math.min(...arrs);
console.log(max, min);

const arrowFunc = (...arg) => arg.reduce((acc, el) => acc + el, 0);

function recursionePow(num, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp < 0) {
    return recursionePow(num, exp + 1) / num;
  }
}

console.log(recursionePow(6, -6));

// подчет гласных №2
function wrapper(str) {
  return str.toLowerCase().split('')
}

let str = "Зима близко Джон Сноу"
const getVowels = (str) => {
  let vowels = wrapper('аеуио')
  let result = wrapper(str).reduce((acc, el) => {
    vowels.includes(el) ? acc++ : 0;
    return acc;
  }, 0);
  return result
};

console.log(getVowels(str));



// классы №3

class RangeValidator {
    constructor(from, to) {
      this.from = from;
      this.to = to;
      this.validVal = (val) => {
        if (typeof val !== "number") throw new Error("Must be a number");
      };
    }
    set setFrom(val) {
      this.from = this.validVal(val);
    }
    get getFrom() {
      return this.from;
    }
    set setTo(val) {
      this.to = this.validVal(val);
    }
    get getTo() {
      return this.to;
    }
    get getRange() {
      return Array(this.from, this.to);
    }
    validate(val) {
      this.validVal(val);
      if (val >= this.from && val <= this.to) {
        return val;
      } else {
        throw new TypeError("Your number is out of range, try agane");
      }
    }
  }
  
  const range = new RangeValidator(RANGE_FROM, RANGE_TO);
  