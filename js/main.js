console.log('Sample JavaScript HW#1');

/*
 * #1
 *
 * Создайте переменные со значениями
 */

// имя переменной: myNum, значение: 10
var myNum = 10;

// имя переменной: myStr, значение: 'строка'
var myStr = 'строка';

// имя переменной: myBool, значение: true
var myBool = true;

// имя переменной: myArr, значения: 1, 2, 3, 4, 5
var myArr = [1, 2, 3, 4, 5,];

// имя переменной myObj, значения: first: 'First Name', last: 'Last Name'
var myObj = {
  first: 'First Name',
  last: 'Last Name'
};

/*
 * #2
 *
 * Отформатируйте целое число, которое хранится в переменной myNum,
 * чтобы получить результат с 2 знаками после запятой.
 * Результат сохраните в переменную decimal2.
 */

// decimal2
console.log('\n=== 2 ===');

var decimal2 = myNum.toFixed(2);

console.log(decimal2);

/*
 * #3
 *
 * Создайте переменную i для которой выполните префиксный
 * и постфиксный инкремент и декремент.
 * Поэкспериментируйте с результатами, выводя их в консоль.
 */

// i
console.log('\n=== 3 ===');

var i = 10;

console.log(i++);       //10
console.log(++i);       //12
console.log(--i, i--, ++i);  //11, 11, 11
console.log(i);         //11

/*
 * #4
 *
 * Создайте новую переменную myTest и присвойте ей значение 20.
 * Выполните присваивание с операцией, используя операторы: +=, –=, *=, /=, %=.
 * Результаты присваиваются в myTest, затем выводятся в консоль.
 * В вычислениях можно использовать объявленную ранее переменную myNum и/или числа.
 */

// myTest
console.log('\n=== 4 ===');

var myTest = 20;

console.log('myTest =', myTest);

// +=
myTest += myNum;

console.log('(myTest += myNum) =', myTest);

// –=
myTest -= myNum;

console.log('(myTest –= myNum) =', myTest);

// *=
myTest *= myNum;

console.log('(myTest *= myNum) =', myTest);

// /=
myTest /= myNum;

console.log('(myTest /= myNum) =', myTest);

// %=
myTest %= myNum;

console.log('(myTest %= myNum) =', myTest);

/*
 * #5
 *
 * Используя свойства и методы объекта Math, присвойте переменным и отобразите в консоли
 */

// константа Pi → myPi
console.log('\n=== 5 ===');

var myPi = Math.PI;

console.log('myPi =', myPi);

// округленное значение числа 89.279 → myRound
var myRound = Math.round(89.279);

console.log('myRound =', myRound);

// случайное число между 0..10 → myRandom
var myRandom = Math.random() * 10;

console.log('myRandom =', myRandom);

// 3 в 5 степени → myPow
var myPow = Math.pow(3, 5);

console.log('myPow =', myPow);

/*
 * #6
 *
 * Создайте объект с именем strObj.
 * Присвойте ключу str строку текста "Мама мыла раму, рама мыла маму", ключу length установите длину этой строки.
 */

// Мама мыла раму, рама мыла маму

// strObj
console.log('\n=== 6 ===');

var strObj = {};

strObj.str = 'Мама мыла раму, рама мыла маму';
strObj['length'] = strObj.str.length;

console.log(strObj);

/*
 * #7
 *
 * Проверьте наличие текста 'рама' в поле str объекта strObj (см.п.6),
 * результат сохраните в переменную isRamaPos и выведите ее в консоль.
 */

// isRamaPos
console.log('\n=== 7 ===');

var isRamaPos = strObj.str.indexOf('рама');

console.log(isRamaPos);

/*
 * #8
 *
 * Выполните переименование подстроки в строке.
 * В качестве исходной строки используйте значение поля str объекта strObj (см.п.6), результат сохраните в переменную strReplace и отобразите в консоли.
 * Исходная строка: 'Мама мыла раму, рама мыла маму'
 *       Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace
console.log('\n=== 8 ===');

var strReplace = strObj.str.replace('мыла', 'моет');

strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');

console.log(strReplace);

/*
 * #9
 *
 * Преобразуйте любую строку в верхний, затем в нижний регистры, результат отобразите в консоли.
 */
console.log('\n=== 9 ===');

var strUpLowCase = strReplace.toUpperCase();

console.log(strUpLowCase);

strUpLowCase = strUpLowCase.toLowerCase();

console.log(strUpLowCase);