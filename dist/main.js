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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todohandlers_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todohandlers/localStorage */ \"./src/modules/todohandlers/localStorage.js\");\n/* harmony import */ var _modules_todohandlers_createTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todohandlers/createTodo */ \"./src/modules/todohandlers/createTodo.js\");\n/* harmony import */ var _modules_todohandlers_filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todohandlers/filters */ \"./src/modules/todohandlers/filters.js\");\n\n\n\n\n//Selectors\nconst background = document.querySelector('body');\nconst todoButton = document.querySelector(`.todo-button`);\nconst todoList = document.querySelector(`.todo-list`);\nconst todoNew = document.querySelector(`.todo-button-create`);\nconst filterButtons = document.querySelector('.filter-list');\n\n//Event Listeners\ndocument.addEventListener('DOMContentLoaded', _modules_todohandlers_localStorage__WEBPACK_IMPORTED_MODULE_0__.default.readStorage);\ntodoButton.addEventListener('click', addToDo);\ntodoList.addEventListener('click', deleteCheck);\ntodoNew.addEventListener('click', testObject);\nfilterButtons.addEventListener('click', function (e) {\n\tconsole.log(`Step one`);\n\tconsole.log(e.target.innerText);\n\t_modules_todohandlers_filters__WEBPACK_IMPORTED_MODULE_2__.default.filterItems(e.target.innerText);\n});\n\n//DOM Handler\nconst insertpoint = document.querySelector('.modal-new-todo');\n\n//close button\nconst closeButton = document.querySelector('.modal-close');\ncloseButton.addEventListener('click', toggleModal);\n\nfunction toggleModal(event) {\n\tevent.preventDefault();\n\tinsertpoint.classList.toggle('show-modal');\n\ttodoList.classList.toggle(`blur`);\n}\n\n//Functions\nconst taskArray = [];\n\nfunction testObject(event) {\n\t// event.preventDefault();\n\t// console.log('Here');\n\t(0,_modules_todohandlers_createTodo__WEBPACK_IMPORTED_MODULE_1__.default)();\n\t// console.log(createToDo());\n\t// console.log(taskArray);\n\ttoggleModal(event);\n}\n\nfunction addToDo(event) {\n\ttoggleModal(event);\n}\n\nfunction deleteCheck(e) {\n\tconst item = e.target;\n\t//Delete\n\tif (item.classList[0] === `trash-btn`) {\n\t\tconst todo = item.parentElement;\n\t\ttodo.classList.add('fall');\n\t\t_modules_todohandlers_localStorage__WEBPACK_IMPORTED_MODULE_0__.default.deleteStorage(todo);\n\t}\n\n\t//Complete\n\tif (item.classList[0] === `complete-btn`) {\n\t\tconst todo = item.parentElement;\n\t\tconsole.log(todo);\n\t\ttodo.classList.toggle('completed');\n\t\ttodo.completed = 'true';\n\t}\n\n\t//Edit\n}\n\n\n//# sourceURL=webpack://deved-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOM/sidebarRender.js":
/*!******************************************!*\
  !*** ./src/modules/DOM/sidebarRender.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sidebarRender = (filter) => {\n\tconst sidebar = document.querySelector('.filter-list');\n\tconst filterItem = document.createElement('li');\n\tfilterItem.className = 'filter-btn';\n\n\t//Blanks handling\n\tif (filter !== '') filterItem.innerText = filter;\n\telse filterItem.innerText = 'Undefined';\n\n\tsidebar.appendChild(filterItem);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebarRender);\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/DOM/sidebarRender.js?");

/***/ }),

/***/ "./src/modules/DOM/todoRender.js":
/*!***************************************!*\
  !*** ./src/modules/DOM/todoRender.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderItem = (todos) => {\n\tconst todoList = document.querySelector(`.todo-list`);\n\ttodoList.innerText = '';\n\n\tconst renderItems = (todo) => {\n\t\tconst toDoDiv = document.createElement('div');\n\n\t\t//Rendering Dates\n\t\tconst locale = navigator.language;\n\t\tconst dueDate = new Date(todo.dueDate).toLocaleDateString(locale);\n\t\tconst created = new Date(todo.createDate).toLocaleDateString(locale);\n\n\t\ttoDoDiv.classList.add('todo');\n\t\t//Priority & ID\n\t\ttoDoDiv.classList.add(`priority--${todo.priority}`);\n\t\ttoDoDiv.id = todo.taskID;\n\n\t\tconst todoCreated = `\n\t<div class=\"todo-top\">\n\t\t<span class=\"createDate\">Created: ${created}</span> \n\t\t<span class=\"dueDate\">Due: ${dueDate}</span>\n\t\t<div class=\"project-priority\">\n\t\t\t<span class=\"project\">${todo.project}</span>\n\t\t\t<span class=\"priority\"> ${todo.priority} Priority</span>\n\t\t</div>\n\t</div>\n\t<div class=\"todo-mid\">\n\t\t<div class=\"div-title\">\n\t\t\t<span class=\"title\">${todo.title}</span>\n\t\t</div>\n\t</div>\n\t<div class=\"todo-bottom\">\n\t\t<span class=\"desc\">${todo.desc}</span>\n\t</div>\n\t`;\n\n\t\tconst newToDo = document.createElement('li');\n\t\tnewToDo.classList.add('todo-item');\n\t\tnewToDo.innerHTML = todoCreated;\n\n\t\ttoDoDiv.appendChild(newToDo);\n\n\t\t//Checkmark Button\n\t\tconst completedBTN = document.createElement('button');\n\t\tcompletedBTN.innerHTML = `<i class=\"fas fa-check\" />`;\n\t\tcompletedBTN.classList.add('complete-btn');\n\t\ttoDoDiv.appendChild(completedBTN);\n\n\t\t//Trash Button\n\t\tconst trashBTN = document.createElement('button');\n\t\ttrashBTN.innerHTML = `<i class=\"fas fa-trash\" />`;\n\t\ttrashBTN.classList.add('trash-btn');\n\t\ttoDoDiv.appendChild(trashBTN);\n\n\t\t//Edit Button\n\t\tconst editBTN = document.createElement('button');\n\t\teditBTN.innerHTML = `<i class=\"fas fa-edit\" />`;\n\t\teditBTN.classList.add('edit-btn');\n\t\ttoDoDiv.appendChild(editBTN);\n\n\t\t//Append to List\n\t\ttodoList.appendChild(toDoDiv);\n\t};\n\n\ttodos.forEach((el) => renderItems(el));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderItem);\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/DOM/todoRender.js?");

/***/ }),

/***/ "./src/modules/todohandlers/createTodo.js":
/*!************************************************!*\
  !*** ./src/modules/todohandlers/createTodo.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFactory */ \"./src/modules/todohandlers/todoFactory.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./src/modules/todohandlers/localStorage.js\");\n\n\n\nconst createTodo = () => {\n\tconst title = document.querySelector('#title');\n\tconst desc = document.querySelector('#desc');\n\tconst project = document.querySelector('#project');\n\tconst dueDate = document.querySelector('#dueDate');\n\tconst priority = document.getElementsByName('priority');\n\n\t//Obtain priority radio button setting\n\tlet pri;\n\tfor (let i = 0; i < priority.length; i++) {\n\t\tif (priority[i].checked) pri = priority[i].value;\n\t}\n\n\tconst date = new Date(dueDate.value);\n\n\t_localStorage__WEBPACK_IMPORTED_MODULE_1__.default.writeStorage(\n\t\t(0,_todoFactory__WEBPACK_IMPORTED_MODULE_0__.default)(title.value, desc.value, project.value, date, pri)\n\t);\n\n\t//Reset\n\ttitle.value = '';\n\tdesc.value = '';\n\tproject.value = '';\n\tdueDate.value = '';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/todohandlers/createTodo.js?");

/***/ }),

/***/ "./src/modules/todohandlers/filters.js":
/*!*********************************************!*\
  !*** ./src/modules/todohandlers/filters.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM_sidebarRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/sidebarRender */ \"./src/modules/DOM/sidebarRender.js\");\n/* harmony import */ var _DOM_todoRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DOM/todoRender */ \"./src/modules/DOM/todoRender.js\");\n\n\n\nconst getFilters = (todos) => {\n\tlet filterArr = [];\n\tconst sidebar = document.querySelector('.filter-list');\n\tsidebar.innerHTML = '';\n\n\ttodos.forEach((el) => {\n\t\tfilterArr.push(el.project);\n\t});\n\n\tconst filterSet = new Set(filterArr);\n\tfilterSet.forEach((filter) => {\n\t\t(0,_DOM_sidebarRender__WEBPACK_IMPORTED_MODULE_0__.default)(filter);\n\t});\n};\n\nconst filterItems = (filter) => {\n\tconsole.log(`Got here! Yay!`);\n\tconst todos = JSON.parse(localStorage.getItem('todos'));\n\tconsole.log(todos);\n\tlet filterOutput = todos.filter((o) => o.project === filter);\n\t(0,_DOM_todoRender__WEBPACK_IMPORTED_MODULE_1__.default)(filterOutput);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ getFilters, filterItems });\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/todohandlers/filters.js?");

/***/ }),

/***/ "./src/modules/todohandlers/localStorage.js":
/*!**************************************************!*\
  !*** ./src/modules/todohandlers/localStorage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM_todoRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/todoRender */ \"./src/modules/DOM/todoRender.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filters */ \"./src/modules/todohandlers/filters.js\");\n\n\n\nconst writeStorage = (todo) => {\n\tlet todos;\n\tif (localStorage.getItem(`todos`) === null) {\n\t\ttodos = [];\n\t} else {\n\t\ttodos = JSON.parse(localStorage.getItem(`todos`));\n\t}\n\ttodos.push(todo);\n\tlocalStorage.setItem('todos', JSON.stringify(todos));\n\treadStorage();\n};\n\nconst readStorage = () => {\n\tconst todoList = document.querySelector(`.todo-list`);\n\tlet todos;\n\n\tif (localStorage.getItem(`todos`) === null) {\n\t\ttodos = [];\n\t} else {\n\t\ttodos = JSON.parse(localStorage.getItem(`todos`));\n\t}\n\t_filters__WEBPACK_IMPORTED_MODULE_1__.default.getFilters(todos);\n\n\t(0,_DOM_todoRender__WEBPACK_IMPORTED_MODULE_0__.default)(todos);\n\t// todos.forEach(function (todo) {\n\t// \ttodoRender(todo);\n\t// });\n};\n\nconst deleteStorage = (todo) => {\n\tlet todos;\n\tif (localStorage.getItem(`todos`) === null) {\n\t\ttodos = [];\n\t} else {\n\t\ttodos = JSON.parse(localStorage.getItem(`todos`));\n\t}\n\tconst todoIndex = todos.findIndex((o) => o.taskID == todo.id);\n\tconsole.log(`Index of ${todo}: ${todoIndex}`);\n\ttodos.splice(todoIndex, 1);\n\tlocalStorage.setItem(`todos`, JSON.stringify(todos));\n\treadStorage();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ readStorage, writeStorage, deleteStorage });\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/todohandlers/localStorage.js?");

/***/ }),

/***/ "./src/modules/todohandlers/todoFactory.js":
/*!*************************************************!*\
  !*** ./src/modules/todohandlers/todoFactory.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todoFactory = (title, desc, project, dueDate, priority) => {\n\tlet taskID = Date.now();\n\tlet createDate = new Date(Date.now());\n\tlet completed = false;\n\treturn {\n\t\tcreateDate,\n\t\ttitle,\n\t\tdesc,\n\t\tproject,\n\t\tdueDate,\n\t\tpriority,\n\t\tcompleted,\n\t\ttaskID,\n\t};\n\t/*\n    Task\n    Description\n    Date Created\n    Project\n    Duedate\n    Priority\n    Complete : bool\n    */\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoFactory);\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/todohandlers/todoFactory.js?");

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