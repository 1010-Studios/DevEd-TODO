import localStorage from './modules/todohandlers/localStorage';
import todoRender from './modules/DOM/todoRender';
import createToDo from './modules/todohandlers/createTodo';
import filters from './modules/todohandlers/todoFilters';

//Selectors
const background = document.querySelector('body');
const todoButton = document.querySelector(`.todo-button`);
const todoList = document.querySelector(`.todo-list`);
const todoNew = document.querySelector(`.todo-button-create`);
const filterButtons = document.querySelector('.filter-list');

//Event Listeners
document.addEventListener('DOMContentLoaded', localStorage.readStorage);
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
todoNew.addEventListener('click', createTodo);
filterButtons.addEventListener('click', function (e) {
	//I want to implement multiple filters here
	//Probably by creating an array
	// e.target.classList.toggle('active');
	// filters.filterItems(e.target.innerText);
	localStorage.sendtoRender(e.target.innerText);
});

//DOM Handler
const modalView = document.querySelector('.modal-new-todo');

//close button
const closeButton = document.querySelector('.modal-close');
closeButton.addEventListener('click', toggleModal);

function toggleModal(event) {
	event.preventDefault();
	modalView.classList.toggle('show-modal');
	todoList.classList.toggle(`blur`);
}

//Functions for Event Listeners
const taskArray = [];

function createTodo(event) {
	event.preventDefault();
	createToDo();
	toggleModal(event);
}

function addToDo(event) {
	toggleModal(event);
}

function deleteCheck(e) {
	const item = e.target;
	//Delete
	if (item.classList[0] === `trash-btn`) {
		const todo = item.parentElement;
		todo.classList.add('fall');
		localStorage.deleteStorage(todo);
	}

	//Complete
	if (item.classList[0] === `complete-btn`) {
		const todo = item.parentElement;
		localStorage.setCompleted(todo);
	}

	//Edit
}

localStorage.readStorage();
