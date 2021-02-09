import sidebarRender from '../DOM/sidebarRender';
import todoRender from '../DOM/todoRender';

const getFilters = (todos) => {
	//Dynamically creates filter lists on the sidebar
	let filterArr = ['View All'];

	todos.forEach((el) => {
		filterArr.push(el.project);
	});

	const filterSet = new Set(filterArr);

	sidebarRender(filterSet);
};

const filterItems = (filter) => {
	const todos = JSON.parse(localStorage.getItem('todos'));
	console.log(filter);
	if (filter == `View All`) todoRender(todos);
	else if (filter == `Undefined`) todoRender(['']);
	else {
		let filtered = todos.filter((o) => o.project === filter);
		todoRender(filtered);
	}
};

export default { getFilters, filterItems };
