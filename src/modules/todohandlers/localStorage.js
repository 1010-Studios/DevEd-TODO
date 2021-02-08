import todoRender from '../DOM/todoRender';
import filters from './filters';

const writeStorage = (todo) => {
	let todos;
	if (localStorage.getItem(`todos`) === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem(`todos`));
	}
	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
	filters.getFilters(todos);
	todoRender(todo);
	// readStorage();
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

	todos.forEach(function (todo) {
		todoRender(todo);
	});
};

const deleteStorage = (todo) => {
	let todos;
	if (localStorage.getItem(`todos`) === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem(`todos`));
	}
	const todoIndex = todo.children[0].innerText;
	todos.splice(todos.indexOf(todoIndex), 1);
	localStorage.setItem(`todos`, JSON.stringify(todos));
	filters.getFilters(todos);
};

export default { readStorage, writeStorage, deleteStorage };
