// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categoriesEl = document.querySelectorAll("li.item");
console.log("Number of categories:", categoriesEl.length);

categoriesEl.forEach(el => {
	console.log("Category:", el.querySelector("h2").textContent);
	console.log("Elements:", el.querySelectorAll("li").length);
});
console.log();

// categoriesAmount.forEach(el => {
// 	console.log(`Category: ${el.querySelector("h2").textContent}`);
// 	console.log(`Elements: ${el.querySelectorAll("li").length}`);
// });

const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
// 	console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// Перебирающий forEach
numbers.forEach(function (number, index) {
	// index = index + 1;
	// index += 1;
	// index++;
	console.log(`Индекс ${index}, значение ${number}`);
});
