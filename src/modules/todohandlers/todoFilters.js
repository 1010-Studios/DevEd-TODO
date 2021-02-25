import sidebarRender from '../DOM/sidebarRender';
import todoMemory from '../todohandlers/todoMemory';

const getFilters = (todos) => {
	//Dynamically creates filter lists on the sidebar
	let filterArr = ['View All'];

	todos.forEach((el) => {
		filterArr.push(el.project);
	});

	const filterSet = new Set(filterArr);

	sidebarRender(filterSet);
};

//Project Name Filtering
const filterItems = (filter) => {
	let filterPriority = JSON.parse(localStorage.getItem('viewPriority'));
	let filterCompleted = JSON.parse(localStorage.getItem('viewCompleted'));

	if (filterPriority === null) {
		console.log('is null....');
		filterPriority = 'all';
		localStorage.setItem('viewPriority', JSON.stringify(filterPriority));
	}

	if (filterCompleted === null) {
		console.log('is null....');
		filterCompleted = 'all';
		localStorage.setItem('viewPriority', JSON.stringify(filterCompleted));
	}

	const todos = todoMemory.localStorageCheck();
	let filtered = [];
	if (
		filter == `View All` ||
		filter == '' ||
		filter == undefined ||
		filter == null
	)
		filtered = todos;
	else {
		filtered = todos.filter((o) => o.project === filter);
	}

	//Priority Filter
	if (filterPriority !== 'all') {
		filtered = filtered.filter((el) => el.priority === filterPriority);
	}

	//Completed Filter

	if (filterCompleted !== `all`) {
		const isTrue = filterCompleted === `true`;
		filtered = filtered.filter((el) => el.completed === isTrue);
	}

	return filtered;
};

export default { getFilters, filterItems };
