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
	const curFilter = JSON.parse(localStorage.getItem('ActiveFilter'));
	let todos = localStorageCheck();
	filters.getFilters(todos);
	sendtoRender(curFilter);
	// return todos;
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

const sendtoRender = (activeFilter) => {
	localStorage.setItem('ActiveFilter', JSON.stringify(activeFilter));
	localStorage.setItem(
		'CurrentView',
		JSON.stringify(filters.filterItems(activeFilter))
	);
	todoRender(JSON.parse(localStorage.getItem('CurrentView')));
	// todoRender(filters.filterItems(activeFilter));
};

export default {
	readStorage,
	writeStorage,
	locateIndex,
	sendtoRender,
	localStorageCheck,
};
