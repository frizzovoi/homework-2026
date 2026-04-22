// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
	firstName: "Владимир",
	lastName: "Коровкин",
	age: 17,
	birthYear: 2008,
	isChill: true,
};

console.log(person);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

const object = {
	abcd: "abcd",
};

function isEmpty(object) {
	for (let key in object) {
		return false;
	}
	return true;
}

console.log(isEmpty(object));
console.log(isEmpty({}));

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

const task = {
	title: "Заголовок",
	description: "Описание",
	isCompleted: true,
};

const modifications = {
	title: "Другой заголовок",
};

function cloneAndModify(object, modifications) {
	return { ...object, ...modifications };
}

const updatedTask = cloneAndModify(task, modifications);

for (const key in updatedTask) {
	console.log(`${key}:`, updatedTask[key]);
}

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
const myObject = {
	method1() {
		console.log("Метод 1 вызван");
	},
	method2() {
		console.log("Метод 2 вызван");
	},
	property: "Это не метод",
};

function callAllMethods(object) {
	for (const method in object) {
		if (typeof object[method] === "function") {
			object[method]();
		}
	}
}

callAllMethods(myObject);

// 😭😭😭😭😭
