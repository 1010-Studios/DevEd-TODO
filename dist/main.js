/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todohandlers_todoMemory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todohandlers/todoMemory */ \"./src/modules/todohandlers/todoMemory.js\");\n/* harmony import */ var _modules_todohandlers_todoStates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todohandlers/todoStates */ \"./src/modules/todohandlers/todoStates.js\");\n/* harmony import */ var _modules_DOM_todoRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/DOM/todoRender */ \"./src/modules/DOM/todoRender.js\");\n/* harmony import */ var _modules_todohandlers_createTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todohandlers/createTodo */ \"./src/modules/todohandlers/createTodo.js\");\n/* harmony import */ var _modules_todohandlers_todoFilters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/todohandlers/todoFilters */ \"./src/modules/todohandlers/todoFilters.js\");\n/* harmony import */ var _modules_demoMode_demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/demoMode/demo */ \"./src/modules/demoMode/demo.js\");\n/* harmony import */ var _modules_todohandlers_todoFactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/todohandlers/todoFactory */ \"./src/modules/todohandlers/todoFactory.js\");\n\n\n\n\n\n\n\n\n\n//Selectors\nconst todoButton = document.querySelector(`.todo-button`);\nconst todoList = document.querySelector(`.todo-list`);\nconst todoNew = document.querySelector(`.todo-button-create`);\nconst filterButtons = document.querySelector('.filter-list');\nconst priorityFilter = document.querySelectorAll('.filter-priority');\nconst completeFilter = document.querySelectorAll('.filter-completed');\nconst demoModeBtn = document.querySelector('.demo-btn');\n\n//Event Listeners\ndocument.addEventListener('DOMContentLoaded', _modules_todohandlers_todoMemory__WEBPACK_IMPORTED_MODULE_0__.default.readStorage);\ntodoButton.addEventListener('click', addToDo);\ntodoList.addEventListener('click', deleteCheck);\ntodoNew.addEventListener('click', createTodo);\ndemoModeBtn.addEventListener('click', function () {\n\tlocalStorage.clear();\n\t_modules_demoMode_demo__WEBPACK_IMPORTED_MODULE_5__.default.forEach((todo) => _modules_todohandlers_todoMemory__WEBPACK_IMPORTED_MODULE_0__.default.writeStorage(todo));\n});\n\n//Sidebar Filters\nfilterButtons.addEventListener('click', function (e) {\n\t_modules_todohandlers_todoMemory__WEBPACK_IMPORTED_MODULE_0__.default.sendtoRender(e.target.innerText);\n\tconsole.log(e.target.innerText);\n\tif (e.target.className === `filter-btn`) {\n\t\tfilterButtons.childNodes.forEach((el) => {\n\t\t\tel.classList.remove('active');\n\t\t\tlocalStorage.setItem('viewProject', JSON.stringify(e.target.innerText));\n\t\t});\n\t\te.target.classList.add('active');\n\t}\n});\n\n//Tag Filters (Priority/Complete Status)\npriorityFilter.forEach((el) =>\n\tel.addEventListener('click', function (e) {\n\t\tpriorityFilter.forEach((item) => item.classList.remove('active'));\n\t\te.target.classList.add('active');\n\t\tlocalStorage.setItem('viewPriority', JSON.stringify(e.target.value));\n\t\t_modules_todohandlers_todoMemory__WEBPACK_IMPORTED_MODULE_0__.default.readStorage();\n\t})\n);\ncompleteFilter.forEach((el) =>\n\tel.addEventListener('click', function (e) {\n\t\tcompleteFilter.forEach((item) => item.classList.remove('active'));\n\t\te.target.classList.add('active');\n\t\tlocalStorage.setItem('viewCompleted', JSON.stringify(e.target.value));\n\t\t_modules_todohandlers_todoMemory__WEBPACK_IMPORTED_MODULE_0__.default.readStorage();\n\t})\n);\n\n//DOM Handler\nconst modalView = document.querySelector('.modal-new-todo');\n\n//close button\nconst closeButton = document.querySelector('.modal-close');\ncloseButton.addEventListener('click', toggleModal);\n\nfunction toggleModal(event) {\n\tevent.preventDefault();\n\tmodalView.classList.toggle('show-modal');\n\ttodoList.classList.toggle(`blur`);\n}\n\n//Functions for Event Listeners\nconst taskArray = [];\n\nfunction createTodo(event) {\n\tevent.preventDefault();\n\t(0,_modules_todohandlers_createTodo__WEBPACK_IMPORTED_MODULE_3__.default)();\n\ttoggleModal(event);\n}\n\nfunction addToDo(event) {\n\ttoggleModal(event);\n}\n\n//Todo functionality Buttons\nfunction deleteCheck(e) {\n\tconst item = e.target;\n\t//Delete\n\tif (item.classList[0] === `trash-btn`) {\n\t\tconst todo = item.parentElement;\n\t\ttodo.classList.add('fall');\n\t\t_modules_todohandlers_todoStates__WEBPACK_IMPORTED_MODULE_1__.default.deleteTodo(todo);\n\t}\n\n\t//Complete\n\tif (item.classList[0] === `complete-btn`) {\n\t\tconst todo = item.parentElement;\n\t\t_modules_todohandlers_todoStates__WEBPACK_IMPORTED_MODULE_1__.default.setComplete(todo);\n\t}\n\n\t//Edit\n\tif (item.classList[0] === `edit-btn`) {\n\t\tconst todo = item.parentElement;\n\t\t//Edit behaviour here!\n\t\talert(`...edit functionality is not yet implemented =(....`);\n\t}\n}\n\n_modules_todohandlers_todoMemory__WEBPACK_IMPORTED_MODULE_0__.default.readStorage();\n\n\n//# sourceURL=webpack://deved-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOM/sidebarRender.js":
/*!******************************************!*\
  !*** ./src/modules/DOM/sidebarRender.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sidebarRender = (filterArr) => {\n\tconst sidebar = document.querySelector('.filter-list');\n\tsidebar.innerHTML = '';\n\n\tfilterArr.forEach((filter) => {\n\t\tconst sidebar = document.querySelector('.filter-list');\n\t\tconst filterItem = document.createElement('li');\n\t\tfilterItem.classList.add('filter-btn');\n\n\t\t//Blanks handling\n\t\tif (filter !== '') filterItem.innerText = filter;\n\n\t\t//Active filter\n\n\t\tsidebar.appendChild(filterItem);\n\t\tsetActiveFilters();\n\t});\n};\n\n//Set Default Active locations\nfunction setActiveFilters() {\n\tconst priorityFilter = document.querySelectorAll('.filter-priority');\n\tconst completeFilter = document.querySelectorAll('.filter-completed');\n\tconst setPriority = localStorage.getItem(`viewPriority`);\n\tconst setComplete = JSON.parse(localStorage.getItem(`viewCompleted`));\n\tconst setProject = JSON.parse(localStorage.getItem(`ActiveFilter`));\n\tconst projectFilter = document.querySelectorAll(`.filter-btn`);\n\n\tpriorityFilter.forEach((el) => {\n\t\tif (el.value == setPriority) el.classList.add('active');\n\t});\n\tcompleteFilter.forEach((el) => {\n\t\tif (el.value == setComplete) el.classList.add('active');\n\t});\n\n\tprojectFilter.forEach((el) => {\n\t\tif (el.innerText == setProject) el.classList.add('active');\n\t});\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebarRender);\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/DOM/sidebarRender.js?");

/***/ }),

/***/ "./src/modules/DOM/todoRender.js":
/*!***************************************!*\
  !*** ./src/modules/DOM/todoRender.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderItem = (todos) => {\n\tconst todoList = document.querySelector(`.todo-list`);\n\ttodoList.innerText = '';\n\n\tconst renderItems = (todo) => {\n\t\tconst toDoDiv = document.createElement('div');\n\t\t//Completed Setting\n\t\tif (todo.completed) toDoDiv.classList.add('completed');\n\n\t\t//Rendering Dates\n\t\tconst locale = navigator.language;\n\t\tconst dueDate = new Date(todo.dueDate).toLocaleDateString(locale);\n\t\tconst created = new Date(todo.createDate).toLocaleDateString(locale);\n\n\t\ttoDoDiv.classList.add('todo');\n\t\t//Priority & ID\n\t\ttoDoDiv.classList.add(`priority--${todo.priority}`);\n\t\ttoDoDiv.id = todo.taskID;\n\n\t\t//Writing the todo\n\t\tconst todoCreated = `\n\t\t\t<div class=\"todo-top\">\n\t\t\t\t<div class=\"dates\">\n\t\t\t\t\t<span class=\"createDate\">Created: ${created}</span> \n\t\t\t\t\t<span class=\"dueDate\">Due: ${dueDate}</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"project-priority\">\n\t\t\t\t\t<span class=\"priority\"> ${todo.priority} Priority</span>\n\t\t\t\t\t<span class=\"project\">${todo.project}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"todo-mid\">\n\t\t\t\t<div class=\"div-title\">\n\t\t\t\t\t<span class=\"title\">${todo.title}</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"todo-bottom\">\n\t\t\t\t<span class=\"desc\">${todo.desc}</span>\n\t\t\t</div>\n\t\t\t`;\n\n\t\tconst newToDo = document.createElement('li');\n\t\tnewToDo.classList.add('todo-item');\n\t\tnewToDo.innerHTML = todoCreated;\n\n\t\ttoDoDiv.appendChild(newToDo);\n\n\t\t//Checkmark Button\n\t\tconst completedBTN = document.createElement('button');\n\t\tcompletedBTN.innerHTML = `<i class=\"fas fa-check\" />`;\n\t\tcompletedBTN.classList.add('complete-btn');\n\t\tcompletedBTN.title = 'Complete Todo';\n\t\ttoDoDiv.appendChild(completedBTN);\n\n\t\t//Trash Button\n\t\tconst trashBTN = document.createElement('button');\n\t\ttrashBTN.innerHTML = `<i class=\"fas fa-trash\" />`;\n\t\ttrashBTN.classList.add('trash-btn');\n\t\ttrashBTN.title = 'Delete Todo';\n\t\ttoDoDiv.appendChild(trashBTN);\n\n\t\t//Edit Button\n\t\t// const editBTN = document.createElement('button');\n\t\t// editBTN.innerHTML = `<i class=\"fas fa-edit\" />`;\n\t\t// editBTN.classList.add('edit-btn');\n\t\t// editBTN.title = 'Edit Todo';\n\t\t// toDoDiv.appendChild(editBTN);\n\n\t\t//Append to List\n\t\ttodoList.appendChild(toDoDiv);\n\t};\n\n\ttodos.forEach((el) => renderItems(el));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderItem);\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/DOM/todoRender.js?");

/***/ }),

/***/ "./src/modules/demoMode/demo.js":
/*!**************************************!*\
  !*** ./src/modules/demoMode/demo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\n\t{\n\t\tcreateDate: new Date('January 31, 2021 17:00:00'),\n\t\ttitle: 'Sort by status',\n\t\tdesc: 'Try clicking the priority buttons above',\n\t\tproject: 'Portfolio',\n\t\tdueDate: new Date('October 4, 2022 11:13:00'),\n\t\tpriority: 'high',\n\t\tcompleted: true,\n\t},\n\t{\n\t\tcreateDate: new Date('January 31, 2021 17:00:00'),\n\t\ttitle: 'Sort by Project',\n\t\tdesc: 'Try clicking the filter buttons to the left',\n\t\tproject: 'Portfolio',\n\t\tdueDate: new Date('March 3, 2073 11:13:00'),\n\t\tpriority: 'normal',\n\t\tcompleted: false,\n\t},\n\t{\n\t\tcreateDate: new Date('January 31, 2021 17:00:00'),\n\t\ttitle: 'Create a new Todo',\n\t\tdesc: \"Try clicking 'New Task' button to the left\",\n\t\tproject: 'Portfolio',\n\t\tdueDate: new Date('July 30, 2026 12:13:00'),\n\t\tpriority: 'normal',\n\t\tcompleted: false,\n\t},\n\t{\n\t\tcreateDate: new Date('January 31, 2021 17:00:00'),\n\t\ttitle: 'Sort by priority',\n\t\tdesc: 'Try clicking priority filter buttons above',\n\t\tproject: 'Portfolio',\n\t\tdueDate: new Date('December 9, 2023 12:13:00'),\n\t\tpriority: 'normal',\n\t\tcompleted: false,\n\t},\n\t{\n\t\tcreateDate: new Date('January 31, 2021 17:00:00'),\n\t\ttitle: 'Hire Ty',\n\t\tdesc: 'Because you want to work with him!',\n\t\tproject: 'Personal',\n\t\tdueDate: new Date('March 1, 2021 12:13:00'),\n\t\tpriority: 'high',\n\t\tcompleted: false,\n\t},\n]);\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/demoMode/demo.js?");

/***/ }),

/***/ "./src/modules/todohandlers/createTodo.js":
/*!************************************************!*\
  !*** ./src/modules/todohandlers/createTodo.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFactory */ \"./src/modules/todohandlers/todoFactory.js\");\n/* harmony import */ var _todoMemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoMemory */ \"./src/modules/todohandlers/todoMemory.js\");\n\n\n\nconst createTodo = () => {\n\tconst title = document.querySelector('#title');\n\tconst desc = document.querySelector('#desc');\n\tconst project = document.querySelector('#project');\n\tconst dueDate = document.querySelector('#dueDate');\n\tconst priority = document.getElementsByName('priority');\n\n\t//Obtain priority radio button setting\n\tlet pri;\n\tfor (let i = 0; i < priority.length; i++) {\n\t\tif (priority[i].checked) pri = priority[i].value;\n\t}\n\n\tconst date = new Date(dueDate.value);\n\n\t_todoMemory__WEBPACK_IMPORTED_MODULE_1__.default.writeStorage(\n\t\t(0,_todoFactory__WEBPACK_IMPORTED_MODULE_0__.default)(title.value, desc.value, project.value, date, pri)\n\t);\n\n\t//Reset\n\ttitle.value = '';\n\tdesc.value = '';\n\tproject.value = '';\n\tdueDate.value = '';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/todohandlers/createTodo.js?");

/***/ }),

/***/ "./src/modules/todohandlers/todoFactory.js":
/*!*************************************************!*\
  !*** ./src/modules/todohandlers/todoFactory.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todoFactory = (title, desc, project, dueDate, priority, completed) => {\n\tlet taskID = Date.now();\n\tlet createDate = new Date(Date.now());\n\ttitle = title || `Untitled`;\n\tproject = project || 'Misc';\n\tdueDate = dueDate || new Date(Date.now());\n\tcompleted = completed || false;\n\n\treturn {\n\t\tcreateDate,\n\t\ttitle,\n\t\tdesc,\n\t\tproject,\n\t\tdueDate,\n\t\tpriority,\n\t\tcompleted,\n\t\ttaskID,\n\t};\n\t/*\n    Task\n    Description\n    Date Created\n    Project\n    Duedate\n    Priority\n    Complete : bool\n    */\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoFactory);\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/todohandlers/todoFactory.js?");

/***/ }),

/***/ "./src/modules/todohandlers/todoFilters.js":
/*!*************************************************!*\
  !*** ./src/modules/todohandlers/todoFilters.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM_sidebarRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/sidebarRender */ \"./src/modules/DOM/sidebarRender.js\");\n/* harmony import */ var _todohandlers_todoMemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todohandlers/todoMemory */ \"./src/modules/todohandlers/todoMemory.js\");\n\n\n\nconst getFilters = (todos) => {\n\t//Dynamically creates filter lists on the sidebar\n\tlet filterArr = ['View All'];\n\n\ttodos.forEach((el) => {\n\t\tfilterArr.push(el.project);\n\t});\n\n\tconst filterSet = new Set(filterArr);\n\n\t(0,_DOM_sidebarRender__WEBPACK_IMPORTED_MODULE_0__.default)(filterSet);\n};\n\n//Project Name Filtering\nconst filterItems = (filter) => {\n\tlet filterPriority = JSON.parse(localStorage.getItem('viewPriority'));\n\tlet filterCompleted = JSON.parse(localStorage.getItem('viewCompleted'));\n\n\tif (filterPriority === null) {\n\t\tconsole.log('is null....');\n\t\tfilterPriority = 'all';\n\t\tlocalStorage.setItem('viewPriority', JSON.stringify(filterPriority));\n\t}\n\n\tif (filterCompleted === null) {\n\t\tconsole.log('is null....');\n\t\tfilterCompleted = 'all';\n\t\tlocalStorage.setItem('viewPriority', JSON.stringify(filterCompleted));\n\t}\n\n\tconst todos = _todohandlers_todoMemory__WEBPACK_IMPORTED_MODULE_1__.default.localStorageCheck();\n\tlet filtered = [];\n\tif (\n\t\tfilter == `View All` ||\n\t\tfilter == '' ||\n\t\tfilter == undefined ||\n\t\tfilter == null\n\t)\n\t\tfiltered = todos;\n\telse {\n\t\tfiltered = todos.filter((o) => o.project === filter);\n\t}\n\n\t//Priority Filter\n\tif (filterPriority !== 'all') {\n\t\tfiltered = filtered.filter((el) => el.priority === filterPriority);\n\t}\n\n\t//Completed Filter\n\n\tif (filterCompleted !== `all`) {\n\t\tconst isTrue = filterCompleted === `true`;\n\t\tfiltered = filtered.filter((el) => el.completed === isTrue);\n\t}\n\n\treturn filtered;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ getFilters, filterItems });\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/todohandlers/todoFilters.js?");

/***/ }),

/***/ "./src/modules/todohandlers/todoMemory.js":
/*!************************************************!*\
  !*** ./src/modules/todohandlers/todoMemory.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM_todoRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/todoRender */ \"./src/modules/DOM/todoRender.js\");\n/* harmony import */ var _todoFilters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoFilters */ \"./src/modules/todohandlers/todoFilters.js\");\n\n\n\nconst writeStorage = (todo) => {\n\tlet todos = localStorageCheck();\n\ttodos.push(todo);\n\tlocalStorage.setItem('todos', JSON.stringify(todos));\n\treadStorage();\n};\n\nconst readStorage = () => {\n\tconst todoList = document.querySelector(`.todo-list`);\n\tconst curFilter = JSON.parse(localStorage.getItem('ActiveFilter'));\n\tlet todos = localStorageCheck();\n\t_todoFilters__WEBPACK_IMPORTED_MODULE_1__.default.getFilters(todos);\n\tsendtoRender(curFilter);\n\t// return todos;\n};\n\nconst localStorageCheck = () => {\n\tif (localStorage.getItem(`todos`) === null) {\n\t\treturn [];\n\t} else {\n\t\treturn JSON.parse(localStorage.getItem(`todos`));\n\t}\n};\n\nconst locateIndex = (lookupValue, lookupProps) => {\n\tlet todos = localStorageCheck();\n\tconst todoIndex = todos.findIndex((o) => o[lookupProps] == lookupValue);\n\treturn todoIndex;\n};\n\nconst sendtoRender = (activeFilter) => {\n\tconsole.log(activeFilter);\n\tif (activeFilter === null) activeFilter = 'View All';\n\tlocalStorage.setItem('ActiveFilter', JSON.stringify(activeFilter));\n\tlocalStorage.setItem(\n\t\t'CurrentView',\n\t\tJSON.stringify(_todoFilters__WEBPACK_IMPORTED_MODULE_1__.default.filterItems(activeFilter))\n\t);\n\t(0,_DOM_todoRender__WEBPACK_IMPORTED_MODULE_0__.default)(JSON.parse(localStorage.getItem('CurrentView')));\n\t// todoRender(filters.filterItems(activeFilter));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\treadStorage,\n\twriteStorage,\n\tlocateIndex,\n\tsendtoRender,\n\tlocalStorageCheck,\n});\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/todohandlers/todoMemory.js?");

/***/ }),

/***/ "./src/modules/todohandlers/todoStates.js":
/*!************************************************!*\
  !*** ./src/modules/todohandlers/todoStates.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoMemory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoMemory */ \"./src/modules/todohandlers/todoMemory.js\");\n\n\nconst setComplete = (todo) => {\n\tlet todos = _todoMemory__WEBPACK_IMPORTED_MODULE_0__.default.localStorageCheck();\n\tconst todoIndex = _todoMemory__WEBPACK_IMPORTED_MODULE_0__.default.locateIndex(todo.id, `taskID`);\n\tconst bool = todos[todoIndex].completed;\n\ttodos[todoIndex].completed = !bool;\n\tlocalStorage.setItem(`todos`, JSON.stringify(todos));\n\t_todoMemory__WEBPACK_IMPORTED_MODULE_0__.default.readStorage();\n};\n\nconst deleteTodo = (todo) => {\n\tlet todos = _todoMemory__WEBPACK_IMPORTED_MODULE_0__.default.localStorageCheck();\n\tconst todoIndex = _todoMemory__WEBPACK_IMPORTED_MODULE_0__.default.locateIndex(todo.id, `taskID`);\n\ttodos.splice(todoIndex, 1);\n\tlocalStorage.setItem(`todos`, JSON.stringify(todos));\n\t_todoMemory__WEBPACK_IMPORTED_MODULE_0__.default.readStorage();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ setComplete, deleteTodo });\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/todohandlers/todoStates.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;