import todoRender from `./todoRender`;

const writeStorage = (todo) => {
	let todos;
	if (localStorage.getItem(`todos`) === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem(`todos`));
	}
	todos.push(todo);
	localStorage.setItem('todos', JSON.stringify(todos));
};

const readStorage = () => {
	const todoList = document.querySelector(`.todo-list`);

	let todos;
	if (localStorage.getItem(`todos`) === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem(`todos`));
	}

    todos.forEach(function (todo) {
        todoRender(todo);
		// const toDoDiv = document.createElement('div');
		// toDoDiv.classList.add('todo');

		// const newToDo = document.createElement('li');
		// newToDo.classList.add('todo-item');
		// newToDo.innerText = todo;

		// toDoDiv.appendChild(newToDo);

		// //Checkmark Button
		// const completedBTN = document.createElement('button');
		// completedBTN.innerHTML = `<i class="fas fa-check" />`;
		// completedBTN.classList.add('complete-btn');
		// toDoDiv.appendChild(completedBTN);

		// //Trash Button
		// const trashBTN = document.createElement('button');
		// trashBTN.innerHTML = `<i class="fas fa-trash" />`;
		// trashBTN.classList.add('trash-btn');
		// toDoDiv.appendChild(trashBTN);

		// //Append to List
		// todoList.appendChild(toDoDiv);
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
};

export default { readStorage, writeStorage, deleteStorage };
