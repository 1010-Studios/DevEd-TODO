import localStorage from './modules/localStorage';
import todoRender from './modules/todoRender';

//Selectors

const todoInput = document.querySelector(`.todo-input`);
const todoButton = document.querySelector(`.todo-button`);
const todoList = document.querySelector(`.todo-list`);
const filterOption = document.querySelector(`.filter-todo`);

//Event Listeners
document.addEventListener('DOMContentLoaded', localStorage.readStorage);
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);

//Functions
function addToDo(event) {
	//prevent form from submitting
	event.preventDefault();
	todoRender(todoInput.value);
	//Clear input
	todoInput.value = '';
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
