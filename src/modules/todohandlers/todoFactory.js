const todoFactory = (title, desc, project, dueDate, priority) => {
	let taskID = Date.now();
	let createDate = new Date(Date.now());
	let completed = false;
	title = title || `Untitled`;
	project = project || 'Misc';

	return {
		createDate,
		title,
		desc,
		project,
		dueDate,
		priority,
		completed,
		taskID,
	};
	/*
    Task
    Description
    Date Created
    Project
    Duedate
    Priority
    Complete : bool
    */
};

export default todoFactory;
