const sidebarRender = (filterArr) => {
	const sidebar = document.querySelector('.filter-list');
	sidebar.innerHTML = '';

	filterArr.forEach((filter) => {
		const sidebar = document.querySelector('.filter-list');
		const filterItem = document.createElement('li');
		filterItem.classList.add('filter-btn');

		//Blanks handling
		if (filter !== '') filterItem.innerText = filter;

		//Active filter

		sidebar.appendChild(filterItem);
		setActiveFilters();
	});
};

//Set Default Active locations
function setActiveFilters() {
	const priorityFilter = document.querySelectorAll('.filter-priority');
	const completeFilter = document.querySelectorAll('.filter-completed');
	const setPriority = localStorage.getItem(`viewPriority`);
	const setComplete = JSON.parse(localStorage.getItem(`viewCompleted`));
	const setProject = JSON.parse(localStorage.getItem(`ActiveFilter`));
	const projectFilter = document.querySelectorAll(`.filter-btn`);

	priorityFilter.forEach((el) => {
		if (el.value == setPriority) el.classList.add('active');
	});
	completeFilter.forEach((el) => {
		if (el.value == setComplete) el.classList.add('active');
	});

	projectFilter.forEach((el) => {
		if (el.innerText == setProject) el.classList.add('active');
	});
}

export default sidebarRender;
