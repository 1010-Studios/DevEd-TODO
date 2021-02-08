const renderItem = (todo) => {
	const todoList = document.querySelector(`.todo-list`);
	const toDoDiv = document.createElement('div');

	toDoDiv.classList.add('todo');

	//Created, Title, Project, Duedate
	//Description, Priority

	const todoCreated = `
	<div class="todo-top">
	Date Created: ${todo.createDate} Due Date: ${todo.dueDate}
	</div>
	<div class="todo-mid">
	${todo.title} ${todo.priority}
	</div>
	<div class="todo-bottom">
	${todo.desc}
	</div>
	`;

	const newToDo = document.createElement('li');
	newToDo.classList.add('todo-item');
	newToDo.innerHTML = todoCreated;

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
};

export default renderItem;
