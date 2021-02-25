import todoMemory from './modules/todohandlers/todoMemory';
import todoStates from './modules/todohandlers/todoStates';
import todoRender from './modules/DOM/todoRender';
import createToDo from './modules/todohandlers/createTodo';
import filters from './modules/todohandlers/todoFilters';
import todoFilters from './modules/todohandlers/todoFilters';
import demo from './modules/demoMode/demo';
import todoFactory from './modules/todohandlers/todoFactory';

//Selectors
const todoButton = document.querySelector(`.todo-button`);
const todoList = document.querySelector(`.todo-list`);
const todoNew = document.querySelector(`.todo-button-create`);
const filterButtons = document.querySelector('.filter-list');
const priorityFilter = document.querySelectorAll('.filter-priority');
const completeFilter = document.querySelectorAll('.filter-completed');
const demoModeBtn = document.querySelector('.demo-btn');

//Event Listeners
document.addEventListener('DOMContentLoaded', todoMemory.readStorage);
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
todoNew.addEventListener('click', createTodo);
demoModeBtn.addEventListener('click', function () {
	localStorage.clear();
	demo.forEach((todo) => todoMemory.writeStorage(todo));
});

//Sidebar Filters
filterButtons.addEventListener('click', function (e) {
	todoMemory.sendtoRender(e.target.innerText);
	console.log(e.target.innerText);
	if (e.target.className === `filter-btn`) {
		filterButtons.childNodes.forEach((el) => {
			el.classList.remove('active');
			localStorage.setItem('viewProject', JSON.stringify(e.target.innerText));
		});
		e.target.classList.add('active');
	}
});

//Tag Filters (Priority/Complete Status)
priorityFilter.forEach((el) =>
	el.addEventListener('click', function (e) {
		priorityFilter.forEach((item) => item.classList.remove('active'));
		e.target.classList.add('active');
		localStorage.setItem('viewPriority', JSON.stringify(e.target.value));
		todoMemory.readStorage();
	})
);
completeFilter.forEach((el) =>
	el.addEventListener('click', function (e) {
		completeFilter.forEach((item) => item.classList.remove('active'));
		e.target.classList.add('active');
		localStorage.setItem('viewCompleted', JSON.stringify(e.target.value));
		todoMemory.readStorage();
	})
);

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

//Todo functionality Buttons
function deleteCheck(e) {
	const item = e.target;
	//Delete
	if (item.classList[0] === `trash-btn`) {
		const todo = item.parentElement;
		todo.classList.add('fall');
		todoStates.deleteTodo(todo);
	}

	//Complete
	if (item.classList[0] === `complete-btn`) {
		const todo = item.parentElement;
		todoStates.setComplete(todo);
	}

	//Edit
	if (item.classList[0] === `edit-btn`) {
		const todo = item.parentElement;
		//Edit behaviour here!
		alert(`...edit functionality is not yet implemented =(....`);
	}
}

todoMemory.readStorage();
