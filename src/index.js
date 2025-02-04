import Project from './Project.js';
import Todo from './Todo.js';

import './style.css';

let projectList = JSON.parse(localStorage.getItem('projects')) || [];

const validator = (function () {
	function isEmpty(str) {
		if (
			str === null ||
			(str !== null) & (str.length === 0 || str.replace(/\s/g, '') === '')
		)
			return true;
		return false;
	}

	return { isEmpty };
})();

const todoManager = (function () {
	function createTodo(title, description = '', dueDate = null) {
		const todo = new Todo(title, description, dueDate);

		return todo;
	}

	function changeTodoChecked(projectId, todoId) {
		const project = projectList[projectId];

		project.todoList[todoId].changeMarked();
		localStorage.setItem('projects', JSON.stringify(projectList));

		const todo = project.todoList[todoId];

		return todo.checked;
	}

	return { createTodo, changeTodoChecked };
})();

const domManager = (function () {
	const projects = document.querySelector('.projects');
	const todos = document.querySelector('.todos__list');

	function displayTodo(projectId, todoId) {
		const todo = projectList[projectId].todoList[todoId];

		const todoItem = `
                <div class="todo__item ${
									todo.checked ? 'todo__item--checked' : ''
								}">
                    <span class="todo__checked" ></span>
                    <div class="todo__title">${todo.title}</div>
                    <div class="todo__description">${todo.description}</div>
                    <div class="todo__date"><span><i class="fa-solid fa-clock"></i></span>${
											todo.dueDate
										}</div>
                    <a href="#" class="todo__button">Delete</a>
                </div>
        `;

		const el = document.createElement('div');
		el.innerHTML = todoItem;

		const todoChecked = el.querySelector('.todo__checked');

		todoChecked.addEventListener('click', (e) => {
			if (todoManager.changeTodoChecked(projectId, todoId)) {
				el.classList.add('todo__item--checked');
				todoChecked.textContent = '✔';
			} else {
				el.classList.remove('todo__item--checked');
				todoChecked.textContent = '';
			}
		});

		const todoDeleteBtn = el.querySelector('.todo__button');
		todoDeleteBtn.addEventListener('click', () => {
			projectList[projectId].todoList.splice(todoId, 1);
			domManager.displayTodosList(projectId);

			localStorage.setItem('projects', JSON.stringify(projectList));
		});

		todos.appendChild(el);

		localStorage.setItem('projects', JSON.stringify(projectList));
	}

	function changeSelectedProject(projectItem, index) {
		let previousSelected = document.querySelectorAll(
			'.project__item--selected'
		);
		previousSelected.forEach((el) => {
			el.classList.remove('project__item--selected');
		});

		projectManager.selectProject(index);
		// projectItem.innerHTML = `
		//     <li class="project__item project__item--selected"><a href="#">${projectList[index].name}</a></li>
		// `;
		projectItem.classList.add('project__item--selected');

		localStorage.setItem('projects', JSON.stringify(projectList));
	}

	function displayProject(projectId) {
		const project = projectList[projectId];
		let projectItem = document.createElement('div');
		projectItem.innerHTML = `
            <li class="project__item"><a href="#">${project.name}</a><span class="project__delete"><i class="fa-solid fa-trash"></i></span></li>
        `;
		projectItem.addEventListener('click', (e) => {
			changeSelectedProject(projectItem, projectId);
		});

		const projectDeleteBtn = projectItem.querySelector('.project__delete');
		projectDeleteBtn.addEventListener('click', () => {
			projectList.splice(projectId, 1);
			localStorage.setItem('projects', JSON.stringify(projectList));
			domManager.displayProjectList();
		});
		projects.appendChild(projectItem);

		localStorage.setItem('projects', JSON.stringify(projectList));
	}

	function displayProjectList() {
		projects.innerHTML = '';
		localStorage.setItem('projects', JSON.stringify(projectList));
		projectList.forEach((_, projectId) => {
			displayProject(projectId);
		});
	}

	function displayTodosList(projectId) {
		const project = projectList[projectId];
		todos.innerHTML = '';
		const projectTodos = project.todoList;
		projectTodos.forEach((_, todoId) => {
			displayTodo(projectId, todoId);
		});
	}

	function initDOM() {
		projectList = JSON.parse(localStorage.getItem('projects')) || [];
		console.log(projectList);

		displayProjectList();

		let addProjectBtn = document.querySelector('.add_project__button');
		addProjectBtn.addEventListener('click', (e) => {
			let projectName = document.querySelector('#projectTitle').value;
			if (!validator.isEmpty(projectName))
				projectManager.createProject(projectName);
			else console.log('error, the project name cannot be empty');
		});

		let addTodoBtn = document.querySelector('.add_todo__button');
		addTodoBtn.addEventListener('click', (e) => {
			let todoTitle = document.querySelector('#todoTitle').value;
			let todoDescription = document.querySelector('#todoDescription').value;
			let todoDueDate = document.querySelector('#todoDueDate').value;
			if (!validator.isEmpty(todoTitle)) {
				const newTodo = todoManager.createTodo(
					todoTitle,
					todoDescription,
					todoDueDate
				);
				if (projectList.length > 0)
					projectManager.addToSelectedProject(newTodo);
				else alert('Cannot add since no projects here');
			} else alert('Cannot create empty title todo');
		});
	}

	return {
		displayTodo,
		displayProject,
		initDOM,
		displayProjectList,
		displayTodosList,
	};
})();

const projectManager = (function () {
	let selectedProjectId = projectList.length > 0 ? 0 : null;

	function createProject(projectName) {
		const newProject = new Project(projectName);
		projectList.push(newProject);
		if (projectList.length === 1) {
			selectProject(0);
		}
		console.log(projectList);
		domManager.displayProjectList();

		localStorage.setItem('projects', JSON.stringify(projectList));
	}

	function selectProject(projectId) {
		selectedProjectId = projectId;
		domManager.displayTodosList(selectedProjectId);
		console.log(projectList[selectedProjectId]);
	}

	function addToSelectedProject(todo) {
		let todoList = projectList[selectedProjectId].todoList;
		todoList.push(todo);
		domManager.displayTodosList(selectedProjectId);

		localStorage.setItem('projects', JSON.stringify(projectList));
	}

	return { createProject, selectProject, addToSelectedProject };
})();

domManager.initDOM();
