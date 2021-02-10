import todoMemory from './modules/todohandlers/todoMemory';
import todoRender from './modules/DOM/todoRender';
import createToDo from './modules/todohandlers/createTodo';
import filters from './modules/todohandlers/todoFilters';
import todoFilters from './modules/todohandlers/todoFilters';

//Selectors
const todoButton = document.querySelector(`.todo-button`);
const todoList = document.querySelector(`.todo-list`);
const todoNew = document.querySelector(`.todo-button-create`);
const filterButtons = document.querySelector('.filter-list');
const priorityFilter = document.querySelectorAll('.filter-priority');
const completeFilter = document.querySelectorAll('.filter-completed');

//Event Listeners
document.addEventListener('DOMContentLoaded', todoMemory.readStorage);
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
todoNew.addEventListener('click', createTodo);

//Sidebar Filters
filterButtons.addEventListener('click', function (e) {
	todoMemory.sendtoRender(e.target.innerText);
	console.log(filterButtons);
	filterButtons.childNodes.forEach((el) => {
		el.classList.remove('active');
		localStorage.setItem('viewProject', JSON.stringify(e.target.innerText));
	});
	e.target.classList.add('active');
});

//Tag Filters
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

//Page Loading

// //Set Default Active locations
// function setActiveFilters() {
// 	const setPriority = JSON.parse(localStorage.getItem(`viewPriority`));
// 	priorityFilter.forEach((el) => {
// 		if (el.value === setPriority) el.classList.add('active');
// 	});
// 	const setComplete = JSON.parse(localStorage.getItem(`viewCompleted`));
// 	completeFilter.forEach((el) => {
// 		if (el.value == setComplete) el.classList.add('active');
// 	});

// 	const setProject = JSON.parse(localStorage.getItem(`viewProject`));
// 	const projectFilter = document.querySelectorAll(`.filter-btn`);
// 	console.log(projectFilter);
// 	console.log(setProject);
// 	//?????
// 	projectFilter.forEach((el) => {
// 		if (el.innerText === setProject) el.classList.add('active');
// 	});
// }

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
		todoMemory.deleteStorage(todo);
	}

	//Complete
	if (item.classList[0] === `complete-btn`) {
		const todo = item.parentElement;
		todoMemory.setCompleted(todo);
	}

	//Edit
}

todoMemory.readStorage();

// setActiveFilters();
