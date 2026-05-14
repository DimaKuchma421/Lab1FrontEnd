'use strict';

const output = document.getElementById('output') || document.body.appendChild(document.createElement('pre'));
output.id = output.id || 'output';

function log(...items) {
  console.log(...items);
  output.textContent += items.map((item) => {
    if (typeof item === 'object' && item !== null) {
      return JSON.stringify(item, null, 2);
    }
    return String(item);
  }).join(' ') + '\n';
}

log('Лабораторна робота 4. JavaScript');
log('Студент: Дмитро Кучмамбетов, група 136');
log('----------------------------------------');

log('\nЗавдання 1. Змінні та типи даних');

const stringValue = 'JavaScript';
const numberValue = 42;
const booleanValue = true;
const nullValue = null;
let undefinedValue;
const symbolValue = Symbol('id');
const bigintValue = 12345678901234567890n;

const primitiveValues = [
  ['string', stringValue],
  ['number', numberValue],
  ['boolean', booleanValue],
  ['null', nullValue],
  ['undefined', undefinedValue],
  ['symbol', symbolValue],
  ['bigint', bigintValue]
];

primitiveValues.forEach(([name, value]) => {
  log(`${name}: ${String(value)}, typeof: ${typeof value}`);
});

log('\nЯвне перетворення типів:');
log(`String(123): ${String(123)}, typeof: ${typeof String(123)}`);
log(`String(false): ${String(false)}, typeof: ${typeof String(false)}`);
log(`Number("123"): ${Number('123')}`);
log(`Number(""): ${Number('')}`);
log(`Number(true): ${Number(true)}`);
log(`Number(false): ${Number(false)}`);
log(`Number(null): ${Number(null)}`);
log(`Number(undefined): ${Number(undefined)}`);

log('\nBoolean перетворення:');
const booleanExamples = [0, '', null, undefined, NaN, '0', [], {}, 'false', 42];
booleanExamples.forEach((value) => {
  log(`Boolean(${String(value)}): ${Boolean(value)}`);
});

const studentName = 'Дмитро Кучмамбетов';
const age = 19;
const university = 'університет';
log(`\nTemplate literal: Студент: ${studentName}, вік: ${age}, навчальний заклад: ${university}`);

log('\nПорівняння == та ===:');
log(`5 == "5": ${5 == '5'}`);
log(`5 === "5": ${5 === '5'}`);
log(`0 == false: ${0 == false}`);
log(`0 === false: ${0 === false}`);
log(`null == undefined: ${null == undefined}`);
log(`null === undefined: ${null === undefined}`);

log('\n----------------------------------------');
log('\nЗавдання 2. Умови та логіка');

function getGrade(score) {
  if (typeof score !== 'number' || Number.isNaN(score) || score < 0 || score > 100) {
    return 'невалідний бал';
  } else if (score < 60) {
    return 'незадовільно';
  } else if (score < 75) {
    return 'задовільно';
  } else if (score < 90) {
    return 'добре';
  }
  return 'відмінно';
}

function getSeasonUA(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return 'зима';
    case 3:
    case 4:
    case 5:
      return 'весна';
    case 6:
    case 7:
    case 8:
      return 'літо';
    case 9:
    case 10:
    case 11:
      return 'осінь';
    default:
      return 'невірний номер місяця';
  }
}

log(`getGrade(45): ${getGrade(45)}`);
log(`getGrade(70): ${getGrade(70)}`);
log(`getGrade(84): ${getGrade(84)}`);
log(`getGrade(95): ${getGrade(95)}`);
log(`getGrade(120): ${getGrade(120)}`);
log(`getGrade("90"): ${getGrade('90')}`);

log(`getSeasonUA(1): ${getSeasonUA(1)}`);
log(`getSeasonUA(4): ${getSeasonUA(4)}`);
log(`getSeasonUA(7): ${getSeasonUA(7)}`);
log(`getSeasonUA(10): ${getSeasonUA(10)}`);
log(`getSeasonUA(15): ${getSeasonUA(15)}`);

const studentAge = 19;
const studentStatus = studentAge >= 18 ? 'повнолітній' : 'неповнолітній';
log(`Тернарний оператор: студент ${studentStatus}`);

log('\n----------------------------------------');
log('\nЗавдання 3. Масиви');

let students = [
  { name: 'Дарья Чингузова', grade: 87, courses: ['JavaScript', 'HTML', 'CSS'] },
  { name: 'Іван Пєгеєв', grade: 55, courses: ['HTML', 'CSS'] },
  { name: 'Марія Бондаренко', grade: 92, courses: ['JavaScript', 'React'] },
  { name: 'Артур Камишан', grade: 73, courses: ['Python', 'HTML'] },
  { name: 'Дмитро Кучмамбетов', grade: 81, courses: ['JavaScript', 'CSS', 'Git'] },
  { name: 'Наталія Шевченко', grade: 96, courses: ['JavaScript', 'HTML', 'Node.js'] }
];

log('Початковий масив студентів:');
log(students);

students.push({ name: 'Сергій Ткаченко', grade: 68, courses: ['CSS', 'Git'] });
log('Після push:', students);

const removedLastStudent = students.pop();
log('Видалений останній студент через pop:', removedLastStudent);

const removedFromMiddle = students.splice(2, 1);
log('Видалений студент із середини через splice:', removedFromMiddle);

students.splice(2, 0, { name: 'Юлія Романенко', grade: 90, courses: ['JavaScript', 'Vue'] });
log('Після додавання студента на позицію 2 через splice:', students);

const firstExcellentStudent = students.find((student) => student.grade > 90);
log('Перший студент з оцінкою більше 90:', firstExcellentStudent);

const jsStudents = students.filter((student) => student.courses.includes('JavaScript'));
log('Студенти, які вивчають JavaScript:', jsStudents);

const averageGrade = students.reduce((sum, student) => sum + student.grade, 0) / students.length;
log(`Середня оцінка студентів: ${averageGrade.toFixed(2)}`);

log('\n----------------------------------------');
log('\nЗавдання 4. Функції');

function rectangleAreaDeclaration(width, height) {
  return width * height;
}

const rectangleAreaExpression = function (width, height) {
  return width * height;
};

const rectangleAreaArrow = (width, height) => width * height;

log(`Function Declaration, площа 5x4: ${rectangleAreaDeclaration(5, 4)}`);
log(`Function Expression, площа 6x3: ${rectangleAreaExpression(6, 3)}`);
log(`Arrow Function, площа 7x2: ${rectangleAreaArrow(7, 2)}`);

function createCounter() {
  let value = 0;

  return {
    increment() {
      value += 1;
      return value;
    },
    decrement() {
      value -= 1;
      return value;
    },
    getValue() {
      return value;
    }
  };
}

const counter = createCounter();
log(`counter.increment(): ${counter.increment()}`);
log(`counter.increment(): ${counter.increment()}`);
log(`counter.decrement(): ${counter.decrement()}`);
log(`counter.getValue(): ${counter.getValue()}`);

function createUser(name, role = 'student', isActive = true) {
  return { name, role, isActive };
}

log('createUser з параметрами за замовчуванням:', createUser('Дмитро'));
log('createUser з усіма параметрами:', createUser('Олена', 'admin', false));

const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 0);
log(`sum(1, 2, 3): ${sum(1, 2, 3)}`);
log(`sum(10, 20): ${sum(10, 20)}`);

function printStudentInfo({ name, grade, courses }) {
  log(`${name} має оцінку ${grade}`);
  log(`Курси: ${courses.join(', ')}`);
}

printStudentInfo(students[0]);
printStudentInfo(students[3]);

log('\n----------------------------------------');
log('\nЗавдання 5. Обʼєкти');

const studentProfile = {
  firstName: 'Дмитро',
  lastName: 'Кучмамбетов',
  age: 19,
  university: 'університет',
  grades: {
    math: 82,
    physics: 76,
    programming: 91,
    css: 88
  },
  isActive: true,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  getAverageGrade() {
    const gradesArray = Object.values(this.grades);
    const total = gradesArray.reduce((sum, grade) => sum + grade, 0);
    return total / gradesArray.length;
  }
};

log(`Повне імʼя: ${studentProfile.getFullName()}`);
log(`Середня оцінка: ${studentProfile.getAverageGrade().toFixed(2)}`);
log(`Dot notation, age: ${studentProfile.age}`);
log(`Bracket notation, university: ${studentProfile['university']}`);

const dynamicKey = 'isActive';
log(`Динамічний ключ [dynamicKey]: ${studentProfile[dynamicKey]}`);

log('Object.keys:', Object.keys(studentProfile));
log('Object.values:', Object.values(studentProfile));
log('Object.entries:', Object.entries(studentProfile));

const studentProfileCopy = {
  ...studentProfile,
  age: 20
};

log(`Оригінальний вік: ${studentProfile.age}`);
log(`Вік у копії: ${studentProfileCopy.age}`);

const labScore = studentProfile.grades?.lab;
const mentorName = studentProfile.mentor?.name ?? 'Не призначено';
log(`Optional chaining, labScore: ${labScore}`);
log(`Optional chaining, mentorName: ${mentorName}`);

log('\n----------------------------------------');
log('\nЗавдання 6. Ланцюжки методів масивів');

const products = [
  { name: 'Ноутбук', price: 25000, category: 'electronics', inStock: true, quantity: 5 },
  { name: 'Миша', price: 600, category: 'electronics', inStock: true, quantity: 15 },
  { name: 'Клавіатура', price: 1200, category: 'electronics', inStock: false, quantity: 8 },
  { name: 'Стіл', price: 4500, category: 'furniture', inStock: true, quantity: 3 },
  { name: 'Крісло', price: 3200, category: 'furniture', inStock: true, quantity: 4 },
  { name: 'Зошит', price: 40, category: 'stationery', inStock: true, quantity: 50 },
  { name: 'Ручка', price: 20, category: 'stationery', inStock: false, quantity: 100 },
  { name: 'Монітор', price: 7000, category: 'electronics', inStock: true, quantity: 6 }
];

const totalStockValue = products
  .filter((product) => product.inStock)
  .map((product) => product.price * product.quantity)
  .reduce((sum, value) => sum + value, 0);

log(`Загальна вартість товарів у наявності: ${totalStockValue}`);

const electronicsNamesByPrice = products
  .filter((product) => product.category === 'electronics')
  .sort((a, b) => a.price - b.price)
  .map((product) => product.name);

log('Назви electronics за ціною:', electronicsNamesByPrice);

const productsByCategory = products.reduce((acc, product) => {
  acc[product.category] = (acc[product.category] ?? 0) + 1;
  return acc;
}, {});

log('Кількість товарів у кожній категорії:', productsByCategory);

const studentsByGrade = [...students].sort((a, b) => b.grade - a.grade);
log('Студенти за оцінкою від найвищої до найнижчої:', studentsByGrade);

const studentsByName = [...students].sort((a, b) => a.name.localeCompare(b.name, 'uk'));
log('Студенти за імʼям в алфавітному порядку:', studentsByName);

log('\n----------------------------------------');
log('\nЗавдання 7. Рядки');

function capitalize(str) {
  if (str.length === 0) {
    return '';
  }
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function countWords(str) {
  const trimmed = str.trim();
  if (trimmed === '') {
    return 0;
  }
  return trimmed.split(' ').filter((word) => word !== '').length;
}

function truncate(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + '...';
}

function isValidEmail(email) {
  if (!email.includes('@')) {
    return false;
  }

  const firstAt = email.indexOf('@');
  const lastAt = email.lastIndexOf('@');

  if (firstAt !== lastAt || firstAt === 0) {
    return false;
  }

  const dotAfterAt = email.indexOf('.', firstAt + 1);
  const lastDot = email.lastIndexOf('.');

  if (dotAfterAt === -1 || dotAfterAt === firstAt + 1) {
    return false;
  }

  return email.length - lastDot - 1 >= 2;
}

log(`capitalize("javaScript"): ${capitalize('javaScript')}`);
log(`capitalize("hello world"): ${capitalize('hello world')}`);
log(`capitalize(""): ${capitalize('')}`);

log(`countWords("JavaScript це круто"): ${countWords('JavaScript це круто')}`);
log(`countWords(" пробіли між словами "): ${countWords(' пробіли між словами ')}`);
log(`countWords("   "): ${countWords('   ')}`);

log(`truncate("Це довгий текст для прикладу", 15): ${truncate('Це довгий текст для прикладу', 15)}`);
log(`truncate("Короткий", 20): ${truncate('Короткий', 20)}`);

log(`isValidEmail("user@example.com"): ${isValidEmail('user@example.com')}`);
log(`isValidEmail("invalid-email"): ${isValidEmail('invalid-email')}`);
log(`isValidEmail("@example.com"): ${isValidEmail('@example.com')}`);
log(`isValidEmail("user@.com"): ${isValidEmail('user@.com')}`);
log(`isValidEmail("user@example.c"): ${isValidEmail('user@example.c')}`);
log(`isValidEmail("user@@example.com"): ${isValidEmail('user@@example.com')}`);

log('\n----------------------------------------');
log('Усі завдання виконано. Також перевірте консоль браузера.');
