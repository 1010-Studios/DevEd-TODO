const renderItem = (todo) => {
	const todoList = document.querySelector(`.todo-list`);
	const toDoDiv = document.createElement('div');

	toDoDiv.classList.add('todo');
	//Priority
	toDoDiv.classList.add(`priority--${todo.priority}`);

	const todoCreated = `
	<div class="todo-top">
		<span class="createDate">Created: ${todo.createDate}</span> 
		<span class="dueDate">Due: ${todo.dueDate}</span>
	</div>
	<div class="todo-mid">
		<div class="div-title">
			<span class="title">${todo.title}</span>
		</div>
		<div class="project-priority">
			<span class="project">${todo.project}</span>
			<span class="priority"> ${todo.priority} Priority</span>
		</div>
	</div>
	<div class="todo-bottom">
		<span class="desc">${todo.desc}</span>
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
