// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

function calculateFinalPrice(basePrice, discountPercent, taxRate) {
	// return basePrice * ((100 - discountPercent) / 100) +
	// 	basePrice * ((100 - discountPercent) / 100) * taxRate;
	let priceBeforeTaxes = basePrice * ((100 - discountPercent) / 100);
	return priceBeforeTaxes + priceBeforeTaxes * taxRate;
}
// иба чотинька😎

// Пример работы:
console.log(calculateFinalPrice(100, 10, 0.2)); // 108
console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

const username = prompt("Введите имя пользователя:");
const password = prompt("Введите пароль:");

function checkAccess(username, password) {
	if (username === "admin" && password === "123456") {
		return "Доступ разрешён";
	} else {
		return "Доступ запрещён";
	}
}

console.log(checkAccess(username, password));

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

const currentHour = prompt("Текущий час:");

console.log(getTimeOfDay(currentHour));

function getTimeOfDay(currentHour) {
	switch (true) {
		case currentHour > 23:
			return "Некорректное время";
		case currentHour >= 18:
			return "Вечер";
			break;
		case currentHour >= 12:
			return "День";
			break;
		case currentHour >= 6:
			return "Утро";
			break;
		case currentHour >= 0:
			return "Ночь";
			break;
		default:
			return "Некорректное время";
	}
}

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

const start = +prompt("Введите число для диапазона, от:");
const end = +prompt("Введите число для диапазона, до:");

// Пример работы:
console.log(findFirstEven(start, end));
console.log(findFirstEven(1, 10)); // 2
console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

function findFirstEven(start, end) {
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) {
			return i;
		}
	}
	return "Чётных чисел нет.";
}

// эта хрень единственная вызвала небольшие затупы, в остальном всё чётко
