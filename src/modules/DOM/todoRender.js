const renderItem = (todos) => {
	const todoList = document.querySelector(`.todo-list`);
	todoList.innerText = '';

	const renderItems = (todo) => {
		const toDoDiv = document.createElement('div');

		//Rendering Dates
		const locale = navigator.language;
		const dueDate = new Date(todo.dueDate).toLocaleDateString(locale);
		const created = new Date(todo.createDate).toLocaleDateString(locale);

		toDoDiv.classList.add('todo');
		//Priority & ID
		toDoDiv.classList.add(`priority--${todo.priority}`);
		toDoDiv.id = todo.taskID;

		const todoCreated = `
	<div class="todo-top">
		<span class="createDate">Created: ${created}</span> 
		<span class="dueDate">Due: ${dueDate}</span>
		<div class="project-priority">
			<span class="project">${todo.project}</span>
			<span class="priority"> ${todo.priority} Priority</span>
		</div>
	</div>
	<div class="todo-mid">
		<div class="div-title">
			<span class="title">${todo.title}</span>
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

		//Edit Button
		const editBTN = document.createElement('button');
		editBTN.innerHTML = `<i class="fas fa-edit" />`;
		editBTN.classList.add('edit-btn');
		toDoDiv.appendChild(editBTN);

		//Append to List
		todoList.appendChild(toDoDiv);
	};

	todos.forEach((el) => renderItems(el));
};

export default renderItem;
