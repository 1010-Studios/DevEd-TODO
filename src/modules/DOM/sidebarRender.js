const sidebarRender = (filter) => {
	const sidebar = document.querySelector('.filter-list');
	const filterItem = document.createElement('li');
	filterItem.className = 'filter-btn';

	//Blanks handling
	if (filter !== '') filterItem.innerText = filter;
	else filterItem.innerText = 'Undefined';

	sidebar.appendChild(filterItem);
};

export default sidebarRender;
