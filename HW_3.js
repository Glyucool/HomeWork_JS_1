// Задание 1. ('nimber' + 3 + 3;)
// Комментарий: Оператор "+" используется для объединения двух строк в одну строку.
//Ответ: number33
let result1 = 'number' + 3 + 3;
console.log(result1);

// Задание 2. (null + 3)
// Комментарий: оператор null конвертирует значения в 0, результат данной строки по факту будет равняться "0 + 3" = "3".
//Ответ: 3
let result2 = null + 3;
console.log(result2);

// Задание 3. (5 && "qwerty")
/* Комментарий: Оператор && возвращает значение второго операнда, только прпи условии, если оба операнда являються истинными. 
В данном примере вторая операнда является значение "qwerty". Ответ: "qwerty". */
//Ответ: qwerty
let result3 = 5 && "qwerty";
console.log(result3);

//Задание 4. (+'40' + +'2' + "hillel")
// В данном примере применяется унарный +. Его используют для конвертирования значений в числа перед их сложением. После сложения чисен конвертируется со строкой hillel
// 1. Унарный плюс перед строкой '40' конвертирует ее в число 40.
let step1 = +'40'; // 40
// 2. Унарный плюс перед строкой '2' конвертирует ее в число 2.
let step2 = +'2';  // 2
// 3. Сложение чисел 40 и 2.
let step3 = step1 + step2; // 42
// 4. Сложение числа 42 и строки "hillel".
let result = step3 + "hillel"; // "42hillel"
// Выводим результат в консоль.
let result4 = +'40' + +'2' + "hillel";
console.log(result4);
// Ответ: "42hillel"

//Задание 5. ('10' - 5 === 6)
// 1. Строка '10' преобразуется в число 10 при вычитании (так как минус (-) работает только с числами).
let step1 = '10' - 5; // 5
// 2. Проверка равенства 5 и 6.
let result = step1 === 6; // false
// Ответ. false
let result5 = '10' - 5 === 6;
console.log(result5); 

//Задание 6. (true + false)
// 1. В данном случае происходит преобразование true в число (true становится 1).значение false преобразуется в число 0, и затем происходит сложение этих чисел.
// Ответ: 1.
let result6  = true + false;
console.log(result6); 

// Задане 7. ('4px' - 3)
//Строка '4px' не может быть преобразована в число, для преобразования строки в число используется функция Number() или унарный плюс +.
//'4px' не является числами, знчение ('4px' - 3)не может выполнить корректное числовое преобразование и возвращает NaN (Not a Number)
// Ответ: NaN
let result7 = '4px' - 3;
console.log(result7);

//Задание 8. ('4' - 3)
//В данном примере наоборот, в свяи с отсутствием в строке '4' текстового значение, происходит приобраование в число. так как дальше идет значение "-" которое используется для вычитания
//Ответ: 1
let result8 = '4' - 3
console.log(result8);

//Задание 9. ('6' + 3 ** 0)
/*Комментарий: Значение степени "3 ** 0" равно 1, и затем происходит конкатенация строки '6' и числа 1. использование оператора ** для возведения в степень и оператора + для конкатенации строк
 приводит к результату, где числовая операция преобразует другой операнд в строку, и затем строки конкатенируются.*/
let step1 = 3 ** 0; // Вычисление степени: 3 ** 0 равно 1.
let result = '6' + step1; // Конкатенация строки '6' и числа 1.
//Ответ: 61
let result9 = '6' + 3 ** 0;
console.log(result9);

//Задание 10 (12 / '6').
//Комментарий. В данном случае идет та же логика как и в задании 8. Строка '6' приобразовуется в числовое значение.
// Ответ: 2
let result10 = 12 / '6';
console.log(result10);

//Задача 11. ('10' + (5 === 6))
//Комментарий: Значение выражения 5 === 6 равно false, так как является логическим сравнением. В данном случае значения числовых операндов не совпадают и возвращается заниение false.
//затем данное логическое значение конкатенируется с строкой '10'. при использовании оператора + с одним из операндов строкой, другой операнд также преобразуется в строку, и затем строки конкатенируются.
//Ответ. 10false
let result11 = '10' + (5 === 6);
console.log(result11);

//Задание 12. (null == '')
//Комментарий. Обе строки приводят к числовому значению 0. 
//Но при сравнении null == '' результат будет false, потому что null и пустая строка '' являются разными типами данных, и нестрогое сравнение (==) не считает их равными.
//Ответ: false
let result12 = null == '';
console.log(result12);

//Задание 13. (3 ** (9 / 3))
//Комментарий. В выражении 3 ** (9 / 3) происходит возведение числа 3 в степень, где степень вычисляется как результат деления 9 на 3.
//Ответ:27
let result13 = 3 ** (9 / 3);
console.log(result13);

//Задание 14. (!!'false' == !!'true')
/*Комментарий.  В данном случает значения 'false' и 'true' приобразуются в булевое значение и сравниваются друг с другом.
строка !!'false' преобразуется в булевое значение с помощью двойного отрицания. Строка 'false' непустая, поэтому преобразуется в true.
!!'true': также преобразуется в булевое значение с помощью двойного отрицания. Строка 'true' также непустая, поэтому преобразуется в true.*/
//Ответ:true
let result14 = !!'false' == !!'true';
console.log(result14);

//Задание 15. (0 || '0' && 1)
/*Комментарий. В выражении 0 || '0' && 1 происходит использование логических операторов || (логическое ИЛИ) и && (логическое И)
'0' && 1: В выражении с использованием логического И (&&), если первый операнд истинен (в данном случае, строка '0' преобразуется в true), 
то возвращается второй операнд, который равен числу 1.
0 || step1: В выражении с использованием логического ИЛИ (||), если первый операнд истинен (в данном случае, 0 преобразуется в false), 
то возвращается второй операнд, который равен числу 1.*/
//Ответ:1
let result15 = 0 || '0' && 1;
console.log(result15);

//Задание 16 ((+null == false) < 1).
/*Комментарий. 1. Преобразование null к числу дает 0. Далее мы равниваем числа 0 с логическим значением false (0 преобразуется в false при нестрогом сравнении).
// 0 == 0 < 1. (Тут я завис на долго и не мог понять почему вовращается ответ false... но гугл в помощь). Далее наше значение 0 == 0 является правильным, то есть имеет 
значение true. В свою очередь значение true приобразуется в 1.
1 < 1 = false*/
// Ответ: false (отличный пример для взрыва мозга)
let result16 = (+null == false) < 1;
console.log(result16);

//Задание 17 (false && true || true).
/*Комментарий. Step1 - false && true: В выражении с использованием логического И (&&, если хотя бы один из операндов является ложным, результат будет false. 
В нашем примере первый операнд (false) является ложным, поэтому результат получаем false.
step1 || true: В выражении с использованием логического ИЛИ (||), из правил если хотя бы один из операндов является истинным, результат будет true. 
В нашем случае step1 равен false, но второй операнд (true) является истинным, поэтому результат true.
*/
// Ответ: true
let result17 = false && true || true;
console.log(result17);

//Задание 18 (false && (false || true)).
/*Комментарий. false || true: В выражении с использованием логического ИЛИ (||), если хотя бы один из операндов истинен, то возвращается первый истинный операнд. 
У нас в примере первый операнд - false, поэтому результат равен true. false && step1: В выражении с использованием логического И (&&), результат (который равен true) 
возвращается только если оба операнда истинны. В данном случае первый операнд - false, поэтому результат равен false.
*/
// Ответ:false
let result18 = false && (false || true);
console.log(result18);

//Задание 19 ((+null == false) < 1 ** 5).
/*Комментарий. 1. +null: Мы приобразовуем null в число 0. Унарный плюс (+) используется для преобразования значения в число.
2. Исходя из первого идем дальше. step1 == false: В выражении сравнения, 0 преобразуется в false, и сравнивается с логическим значением false. Результат этого 
сравнения является значение — true.
Далее мы берем 1 ** 5: Возводим число 1 в 5ую степень. Это равно 1.
step2 < step3: Сравнение результата предыдущего шага (true) с числом 1. То есть true<1 или 1<1. Результат этого сравнения — false.
*/
// Ответ: false
let result19 = (+null == false) < 1 ** 5;
console.log(result19);
