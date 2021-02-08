import sidebarRender from '../DOM/sidebarRender';
import todoRender from '../DOM/todoRender';

const getFilters = (todos) => {
	let filterArr = [];
	const sidebar = document.querySelector('.filter-list');
	sidebar.innerHTML = '';

	todos.forEach((el) => {
		filterArr.push(el.project);
	});

	const filterSet = new Set(filterArr);
	filterSet.forEach((filter) => {
		sidebarRender(filter);
	});
};

const filterItems = (filter) => {
	console.log(`Got here! Yay!`);
	const todos = JSON.parse(localStorage.getItem('todos'));
	console.log(todos);
	let filterOutput = todos.filter((o) => o.project === filter);
	todoRender(filterOutput);
};

export default { getFilters, filterItems };
