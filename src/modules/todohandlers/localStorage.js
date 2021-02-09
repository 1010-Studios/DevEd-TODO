import todoRender from '../DOM/todoRender';
import filters from './todoFilters';

const writeStorage = (todo) => {
	let todos = localStorageCheck();
	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
	readStorage();
};

const readStorage = () => {
	const todoList = document.querySelector(`.todo-list`);
	let todos = localStorageCheck();
	filters.getFilters(todos);

	todoRender(todos);
};

const deleteStorage = (todo) => {
	let todos = localStorageCheck();
	const todoIndex = locateIndex(todo.id, `taskID`);
	todos.splice(todoIndex, 1);
	localStorage.setItem(`todos`, JSON.stringify(todos));
	readStorage();
};

const editStorage = (todo) => {};

const setCompleted = (todo) => {
	let todos = localStorageCheck();
	const todoIndex = locateIndex(todo.id, `taskID`);
	const bool = todos[todoIndex].completed;
	todos[todoIndex].completed = !bool;
	localStorage.setItem(`todos`, JSON.stringify(todos));
	readStorage();
};

const localStorageCheck = () => {
	if (localStorage.getItem(`todos`) === null) {
		return [];
	} else {
		return JSON.parse(localStorage.getItem(`todos`));
	}
};

const locateIndex = (lookupValue, lookupProps) => {
	let todos = localStorageCheck();
	const todoIndex = todos.findIndex((o) => o[lookupProps] == lookupValue);
	return todoIndex;
};

export default { readStorage, writeStorage, deleteStorage, setCompleted };
