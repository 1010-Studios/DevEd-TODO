import sidebarRender from '../DOM/sidebarRender';

const getFilters = (todos) => {
	let filterArr = [];
	const sidebar = document.querySelector('.filter-list');
	sidebar.innerHTML = '';

	todos.forEach((el) => {
		console.log(el.project);
		filterArr.push(el.project);
	});

	const filterSet = new Set(filterArr);
	filterSet.forEach((filter) => {
		sidebarRender(filter);
	});
};

export default { getFilters };
