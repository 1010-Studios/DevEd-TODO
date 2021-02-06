import localStorage from './modules/localStorage';
import todoRender from './modules/DOM/todoRender';
import todoFactory from './modules/todoFactory';
// import createToDo from './modules/DOM/createTodo';

//Selectors
const todoInput = document.querySelector(`.todo-input`);
const todoButton = document.querySelector(`.todo-button`);
const todoList = document.querySelector(`.todo-list`);
const filterOption = document.querySelector(`.filter-todo`);
const todoNew = document.querySelector(`.todo-new`);

//Event Listeners
document.addEventListener('DOMContentLoaded', localStorage.readStorage);
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);
todoNew.addEventListener('click', testObject);

//DOM Handler
const insertpoint = document.querySelector('.modal-new-todo');

//close button
const closeButton = document.querySelector('.modal-close');
closeButton.addEventListener('click', toggleModal);

function toggleModal(event) {
	event.preventDefault();
	insertpoint.classList.toggle('show-modal');
}

//Functions
const taskArray = [];

function testObject(event) {
	// event.preventDefault();
	console.log('Here');
	taskArray.push(
		todoFactory(`TestTitle`, `Descriptor!`, `Misc Project`, `May 2nd`, `High`)
	);
	console.log(taskArray);
}

function addToDo(event) {
	//prevent form from submitting
	// event.preventDefault();
	toggleModal(event);
	// localStorage.writeStorage(todoInput.value);
	//Clear input
	// todoInput.value = '';
}

function deleteCheck(e) {
	const item = e.target;
	//Delete
	if (item.classList[0] === `trash-btn`) {
		const todo = item.parentElement;
		todo.classList.add('fall');
		localStorage.deleteStorage(todo);
		todo.addEventListener('transitionend', function () {
			todo.remove();
		});
	}

	//Checkmark
	if (item.classList[0] === `complete-btn`) {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
	}
}

function filterToDo(e) {
	console.log(`Hi!`);
	const todos = todoList.childNodes;
	todos.forEach(function (todo) {
		switch (e.target.value) {
			case 'all':
				todo.style.display = 'flex';
				break;
			case `completed`:
				if (todo.classList.contains(`completed`)) {
					todo.style.display = 'flex';
				} else {
					todo.style.display = 'none';
				}
				break;
			case `uncompleted`:
				if (todo.classList.contains(`completed`)) {
					todo.style.display = 'none';
				} else {
					todo.style.display = 'flex';
				}
				break;
		}
	});
}
