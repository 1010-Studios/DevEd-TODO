import sidebarRender from '../DOM/sidebarRender';

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
	const filterPriority = JSON.parse(localStorage.getItem('viewPriority'));
	const filterCompleted = JSON.parse(localStorage.getItem('viewCompleted'));
	const todos = JSON.parse(localStorage.getItem('todos'));
	let filtered = [];
	if (filter == `View All` || filter == '' || filter == undefined)
		filtered = todos;
	else {
		filtered = todos.filter((o) => o.project === filter);
	}
	//Priority Filter
	if (filterPriority !== 'all') {
		filtered = filtered.filter((el) => el.priority === filterPriority);
		console.log(`Here`);
	}

	//Completed Filter

	if (filterCompleted !== `all`) {
		const isTrue = filterCompleted === `true`;
		filtered = filtered.filter((el) => el.completed === isTrue);
	}

	return filtered;
};

export default { getFilters, filterItems };
