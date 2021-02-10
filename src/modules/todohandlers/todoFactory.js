const todoFactory = (title, desc, project, dueDate, priority, completed) => {
	let taskID = Date.now();
	let createDate = new Date(Date.now());
	title = title || `Untitled`;
	project = project || 'Misc';
	dueDate = dueDate || new Date(Date.now());
	completed = completed || false;

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
