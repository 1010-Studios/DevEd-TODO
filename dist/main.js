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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todohandlers_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todohandlers/localStorage */ \"./src/modules/todohandlers/localStorage.js\");\n/* harmony import */ var _modules_DOM_todoRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/DOM/todoRender */ \"./src/modules/DOM/todoRender.js\");\n/* harmony import */ var _modules_todohandlers_todoFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todohandlers/todoFactory */ \"./src/modules/todohandlers/todoFactory.js\");\n/* harmony import */ var _modules_todohandlers_createTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todohandlers/createTodo */ \"./src/modules/todohandlers/createTodo.js\");\n\n\n\n\n\n//Selectors\nconst todoInput = document.querySelector(`.todo-input`);\nconst todoButton = document.querySelector(`.todo-button`);\nconst todoList = document.querySelector(`.todo-list`);\nconst todoNew = document.querySelector(`.todo-button-create`);\n\n//Event Listeners\ndocument.addEventListener('DOMContentLoaded', _modules_todohandlers_localStorage__WEBPACK_IMPORTED_MODULE_0__.default.readStorage);\ntodoButton.addEventListener('click', addToDo);\ntodoList.addEventListener('click', deleteCheck);\ntodoNew.addEventListener('click', testObject);\n\n//DOM Handler\nconst insertpoint = document.querySelector('.modal-new-todo');\n\n//close button\nconst closeButton = document.querySelector('.modal-close');\ncloseButton.addEventListener('click', toggleModal);\n\nfunction toggleModal(event) {\n\tevent.preventDefault();\n\tinsertpoint.classList.toggle('show-modal');\n}\n\n//Functions\nconst taskArray = [];\n\nfunction testObject(event) {\n\tevent.preventDefault();\n\tconsole.log('Here');\n\t// createToDo();\n\tconsole.log((0,_modules_todohandlers_createTodo__WEBPACK_IMPORTED_MODULE_3__.default)());\n\tconsole.log(taskArray);\n\ttoggleModal(event);\n}\n\nfunction addToDo(event) {\n\t//prevent form from submitting\n\t// event.preventDefault();\n\ttoggleModal(event);\n\t// localStorage.writeStorage(todoInput.value);\n\t//Clear input\n\t// todoInput.value = '';\n}\n\nfunction deleteCheck(e) {\n\tconst item = e.target;\n\t//Delete\n\tif (item.classList[0] === `trash-btn`) {\n\t\tconst todo = item.parentElement;\n\t\ttodo.classList.add('fall');\n\t\t_modules_todohandlers_localStorage__WEBPACK_IMPORTED_MODULE_0__.default.deleteStorage(todo);\n\t\ttodo.addEventListener('transitionend', function () {\n\t\t\ttodo.remove();\n\t\t});\n\t}\n\n\t//Checkmark\n\tif (item.classList[0] === `complete-btn`) {\n\t\tconst todo = item.parentElement;\n\t\ttodo.classList.toggle('completed');\n\t}\n}\n\n\n//# sourceURL=webpack://deved-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/DOM/todoRender.js":
/*!***************************************!*\
  !*** ./src/modules/DOM/todoRender.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderItem = (todo) => {\n\tconst todoList = document.querySelector(`.todo-list`);\n\tconst toDoDiv = document.createElement('div');\n\n\ttoDoDiv.classList.add('todo');\n\t//Priority\n\ttoDoDiv.classList.add(`priority--${todo.priority}`);\n\n\tconst todoCreated = `\n\t<div class=\"todo-top\">\n\t\t<span class=\"createDate\">Created: ${todo.createDate}</span> \n\t\t<span class=\"dueDate\">Due: ${todo.dueDate}</span>\n\t</div>\n\t<div class=\"todo-mid\">\n\t\t<div class=\"div-title\">\n\t\t\t<span class=\"title\">${todo.title}</span>\n\t\t</div>\n\t\t<div class=\"project-priority\">\n\t\t\t<span class=\"project\">${todo.project}</span>\n\t\t\t<span class=\"priority\"> ${todo.priority}</span>\n\t\t</div>\n\t</div>\n\t<div class=\"todo-bottom\">\n\t\t<span class=\"desc\">${todo.desc}</span>\n\t</div>\n\t`;\n\n\tconst newToDo = document.createElement('li');\n\tnewToDo.classList.add('todo-item');\n\tnewToDo.innerHTML = todoCreated;\n\n\ttoDoDiv.appendChild(newToDo);\n\n\t//Checkmark Button\n\tconst completedBTN = document.createElement('button');\n\tcompletedBTN.innerHTML = `<i class=\"fas fa-check\" />`;\n\tcompletedBTN.classList.add('complete-btn');\n\ttoDoDiv.appendChild(completedBTN);\n\n\t//Trash Button\n\tconst trashBTN = document.createElement('button');\n\ttrashBTN.innerHTML = `<i class=\"fas fa-trash\" />`;\n\ttrashBTN.classList.add('trash-btn');\n\ttoDoDiv.appendChild(trashBTN);\n\n\t//Append to List\n\ttodoList.appendChild(toDoDiv);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderItem);\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/DOM/todoRender.js?");

/***/ }),

/***/ "./src/modules/todohandlers/createTodo.js":
/*!************************************************!*\
  !*** ./src/modules/todohandlers/createTodo.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoFactory */ \"./src/modules/todohandlers/todoFactory.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./src/modules/todohandlers/localStorage.js\");\n\n\n\nconst createTodo = () => {\n\tconst title = document.querySelector('#title');\n\tconst desc = document.querySelector('#desc');\n\tconst project = document.querySelector('#project');\n\tconst dueDate = document.querySelector('#dueDate');\n\tconst priority = document.getElementsByName('priority');\n\n\t//Obtain priority radio button setting\n\tlet pri;\n\tfor (let i = 0; i < priority.length; i++) {\n\t\tif (priority[i].checked) pri = priority[i].value;\n\t}\n\n\t_localStorage__WEBPACK_IMPORTED_MODULE_1__.default.writeStorage(\n\t\t(0,_todoFactory__WEBPACK_IMPORTED_MODULE_0__.default)(title.value, desc.value, project.value, dueDate.value, pri)\n\t);\n\n\t//Reset\n\ttitle.value = '';\n\tdesc.value = '';\n\tproject.value = '';\n\tdueDate.value = '';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodo);\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/todohandlers/createTodo.js?");

/***/ }),

/***/ "./src/modules/todohandlers/localStorage.js":
/*!**************************************************!*\
  !*** ./src/modules/todohandlers/localStorage.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DOM_todoRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/todoRender */ \"./src/modules/DOM/todoRender.js\");\n\n\nconst writeStorage = (todo) => {\n\tlet todos;\n\tif (localStorage.getItem(`todos`) === null) {\n\t\ttodos = [];\n\t} else {\n\t\ttodos = JSON.parse(localStorage.getItem(`todos`));\n\t}\n\ttodos.push(todo);\n\tlocalStorage.setItem('todos', JSON.stringify(todos));\n\t(0,_DOM_todoRender__WEBPACK_IMPORTED_MODULE_0__.default)(todo);\n};\n\nconst readStorage = () => {\n\tconst todoList = document.querySelector(`.todo-list`);\n\tlet todos;\n\n\tif (localStorage.getItem(`todos`) === null) {\n\t\ttodos = [];\n\t} else {\n\t\ttodos = JSON.parse(localStorage.getItem(`todos`));\n\t}\n\n\ttodos.forEach(function (todo) {\n\t\t(0,_DOM_todoRender__WEBPACK_IMPORTED_MODULE_0__.default)(todo);\n\t});\n};\n\nconst deleteStorage = (todo) => {\n\tlet todos;\n\tif (localStorage.getItem(`todos`) === null) {\n\t\ttodos = [];\n\t} else {\n\t\ttodos = JSON.parse(localStorage.getItem(`todos`));\n\t}\n\tconst todoIndex = todo.children[0].innerText;\n\ttodos.splice(todos.indexOf(todoIndex), 1);\n\tlocalStorage.setItem(`todos`, JSON.stringify(todos));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ readStorage, writeStorage, deleteStorage });\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/todohandlers/localStorage.js?");

/***/ }),

/***/ "./src/modules/todohandlers/todoFactory.js":
/*!*************************************************!*\
  !*** ./src/modules/todohandlers/todoFactory.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todoFactory = (title, desc, project, dueDate, priority) => {\n\tlet createDate = Date.now();\n\treturn { createDate, title, desc, project, dueDate, priority };\n\t/*\n    Task\n    Description\n    Date Created\n    Project\n    Duedate\n    Priority\n    Complete : bool\n    */\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoFactory);\n\n\n//# sourceURL=webpack://deved-todo/./src/modules/todohandlers/todoFactory.js?");

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