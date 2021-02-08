const sidebarRender = (filter) => {
	const sidebar = document.querySelector('.filter-list');
	const filterItem = document.createElement('li');

	filterItem.innerText = filter;
	sidebar.appendChild(filterItem);
};

export default sidebarRender;
