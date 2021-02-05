//Selectors

const todoInput = document.querySelector(`.todo-input`);
const todoButton = document.querySelector(`.todo-button`);
const todoList = document.querySelector(`.todo-list`);
const filterOption = document.querySelector(`.filter-todo`);

//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos());
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterToDo);

//Functions
function addToDo(event) {
	//prevent form from submitting
	event.preventDefault();
	const toDoDiv = document.createElement('div');
	toDoDiv.classList.add('todo');

	const newToDo = document.createElement('li');
	newToDo.classList.add('todo-item');
	newToDo.innerText = todoInput.value;

	toDoDiv.appendChild(newToDo);

	//Save todo to local
	saveLocalTodos(todoInput.value);

	//Checkmark Button
	const completedBTN = document.createElement('button');
	completedBTN.innerHTML = `<i class="fas fa-check" />`;
	completedBTN.classList.add('complete-btn');
	toDoDiv.appendChild(completedBTN);

	//Trash Button
	const trashBTN = document.createElement('button');
	trashBTN.innerHTML = `<i class="fas fa-trash" />`;
	trashBTN.classList.add('trash-btn');
	toDoDiv.appendChild(trashBTN);

	//Append to List
	todoList.appendChild(toDoDiv);

	//Clear input
	todoInput.value = '';
}

function deleteCheck(e) {
	const item = e.target;
	//Delete
	if (item.classList[0] === `trash-btn`) {
		const todo = item.parentElement;
		todo.classList.add('fall');
		removeLocalTodos(todo);
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

function saveLocalTodos(todo) {
	//check
	let todos;
	if (localStorage.getItem(`todos`) === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem(`todos`));
	}

	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
	//check
	let todos;
	if (localStorage.getItem(`todos`) === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem(`todos`));
	}

	todos.forEach(function (todo) {
		const toDoDiv = document.createElement('div');
		toDoDiv.classList.add('todo');

		const newToDo = document.createElement('li');
		newToDo.classList.add('todo-item');
		newToDo.innerText = todo;

		toDoDiv.appendChild(newToDo);

		//Checkmark Button
		const completedBTN = document.createElement('button');
		completedBTN.innerHTML = `<i class="fas fa-check" />`;
		completedBTN.classList.add('complete-btn');
		toDoDiv.appendChild(completedBTN);

		//Trash Button
		const trashBTN = document.createElement('button');
		trashBTN.innerHTML = `<i class="fas fa-trash" />`;
		trashBTN.classList.add('trash-btn');
		toDoDiv.appendChild(trashBTN);

		//Append to List
		todoList.appendChild(toDoDiv);
	});
}

function removeLocalTodos(todo) {
	let todos;
	if (localStorage.getItem(`todos`) === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem(`todos`));
	}
	const todoIndex = todo.children[0].innerText;
	todos.splice(todos.indexOf(todoIndex), 1);
	localStorage.setItem(`todos`, JSON.stringify(todos));
}
