const todoFactory = (title, desc, project, dueDate, priority) => {
	let createDate = new Date(Date.now());
	let completed = false;
	return { createDate, title, desc, project, dueDate, priority, completed };
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
