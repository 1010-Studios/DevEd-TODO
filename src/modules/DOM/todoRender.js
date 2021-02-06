const renderItem = (todo) => {
	const todoList = document.querySelector(`.todo-list`);
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
};

export default renderItem;
