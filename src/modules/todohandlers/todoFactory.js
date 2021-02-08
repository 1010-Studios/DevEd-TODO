const todoFactory = (title, desc, project, dueDate, priority) => {
	let createDate = Date.now();
	return { createDate, title, desc, project, dueDate, priority };
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
