const renderItem = (todos) => {
	const todoList = document.querySelector(`.todo-list`);
	todoList.innerText = '';

	const renderItems = (todo) => {
		const toDoDiv = document.createElement('div');
		//Completed Setting
		if (todo.completed) toDoDiv.classList.add('completed');

		//Rendering Dates
		const locale = navigator.language;
		const dueDate = new Date(todo.dueDate).toLocaleDateString(locale);
		const created = new Date(todo.createDate).toLocaleDateString(locale);

		toDoDiv.classList.add('todo');
		//Priority & ID
		toDoDiv.classList.add(`priority--${todo.priority}`);
		toDoDiv.id = todo.taskID;

		//Writing the todo
		const todoCreated = `
			<div class="todo-top">
				<div class="dates">
					<span class="createDate">Created: ${created}</span> 
					<span class="dueDate">Due: ${dueDate}</span>
				</div>
				<div class="project-priority">
					<span class="priority"> ${todo.priority} Priority</span>
					<span class="project">${todo.project}</span>
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
		completedBTN.title = 'Complete Todo';
		toDoDiv.appendChild(completedBTN);

		//Trash Button
		const trashBTN = document.createElement('button');
		trashBTN.innerHTML = `<i class="fas fa-trash" />`;
		trashBTN.classList.add('trash-btn');
		trashBTN.title = 'Delete Todo';
		toDoDiv.appendChild(trashBTN);

		//Edit Button
		// const editBTN = document.createElement('button');
		// editBTN.innerHTML = `<i class="fas fa-edit" />`;
		// editBTN.classList.add('edit-btn');
		// editBTN.title = 'Edit Todo';
		// toDoDiv.appendChild(editBTN);

		//Append to List
		todoList.appendChild(toDoDiv);
	};

	todos.forEach((el) => renderItems(el));
};

export default renderItem;
