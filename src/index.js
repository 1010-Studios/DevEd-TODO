import localStorage from './modules/todohandlers/localStorage';
import createToDo from './modules/todohandlers/createTodo';
import filters from './modules/todohandlers/filters';

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
todoNew.addEventListener('click', testObject);
filterButtons.addEventListener('click', function (e) {
	console.log(`Step one`);
	console.log(e.target.innerText);
	filters.filterItems(e.target.innerText);
});

//DOM Handler
const insertpoint = document.querySelector('.modal-new-todo');

//close button
const closeButton = document.querySelector('.modal-close');
closeButton.addEventListener('click', toggleModal);

function toggleModal(event) {
	event.preventDefault();
	insertpoint.classList.toggle('show-modal');
	todoList.classList.toggle(`blur`);
}

//Functions
const taskArray = [];

function testObject(event) {
	// event.preventDefault();
	// console.log('Here');
	createToDo();
	// console.log(createToDo());
	// console.log(taskArray);
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
		console.log(todo);
		todo.classList.toggle('completed');
		todo.completed = 'true';
	}

	//Edit
}
