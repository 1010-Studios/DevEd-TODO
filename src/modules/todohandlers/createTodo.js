import todoFactory from './todoFactory';
import todoMemory from './todoMemory';

const createTodo = () => {
	const title = document.querySelector('#title');
	const desc = document.querySelector('#desc');
	const project = document.querySelector('#project');
	const dueDate = document.querySelector('#dueDate');
	const priority = document.getElementsByName('priority');

	//Obtain priority radio button setting
	let pri;
	for (let i = 0; i < priority.length; i++) {
		if (priority[i].checked) pri = priority[i].value;
	}

	const date = new Date(dueDate.value);

	todoMemory.writeStorage(
		todoFactory(title.value, desc.value, project.value, date, pri)
	);

	//Reset
	title.value = '';
	desc.value = '';
	project.value = '';
	dueDate.value = '';
};

export default createTodo;
