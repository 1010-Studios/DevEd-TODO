import todoMemory from './todoMemory';

const setComplete = (todo) => {
	let todos = todoMemory.localStorageCheck();
	const todoIndex = todoMemory.locateIndex(todo.id, `taskID`);
	const bool = todos[todoIndex].completed;
	todos[todoIndex].completed = !bool;
	localStorage.setItem(`todos`, JSON.stringify(todos));
	todoMemory.readStorage();
};

const deleteTodo = (todo) => {
	let todos = todoMemory.localStorageCheck();
	const todoIndex = todoMemory.locateIndex(todo.id, `taskID`);
	todos.splice(todoIndex, 1);
	localStorage.setItem(`todos`, JSON.stringify(todos));
	todoMemory.readStorage();
};

export default { setComplete, deleteTodo };
