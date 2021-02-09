import todoRender from '../DOM/todoRender';
import filters from './todoFilters';

const writeStorage = (todo) => {
	let todos;
	if (localStorage.getItem(`todos`) === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem(`todos`));
	}
	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
	readStorage();
};

const readStorage = () => {
	const todoList = document.querySelector(`.todo-list`);
	let todos;

	if (localStorage.getItem(`todos`) === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem(`todos`));
	}
	filters.getFilters(todos);

	todoRender(todos);
	// todos.forEach(function (todo) {
	// 	todoRender(todo);
	// });
};

const deleteStorage = (todo) => {
	let todos;
	if (localStorage.getItem(`todos`) === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem(`todos`));
	}
	const todoIndex = todos.findIndex((o) => o.taskID == todo.id);
	console.log(`Index of ${todo}: ${todoIndex}`);
	todos.splice(todoIndex, 1);
	localStorage.setItem(`todos`, JSON.stringify(todos));
	readStorage();
};

export default { readStorage, writeStorage, deleteStorage };
