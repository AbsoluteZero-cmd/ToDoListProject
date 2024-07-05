import Project from "./Project.js";
import Todo from "./Todo.js";

import './style.css';

const projectList = [];

const validator = (function() {
    function isEmpty(str) {
        if(str === null || str !== null & (str.length === 0 || str.replace(/\s/g, '') === '')) return true;
        return false;
    }

    return { isEmpty };
})();

const todoManager = (function() {

    function createTodo(title, description = '', dueDate = null) {
        const todo = new Todo(title, description, dueDate);

        return todo;
    }

    function changedTodoChecked(projectId, todoId) {
        const project = projectList[projectId];
        project.todoList[todoId].changeMarked();
    }

    return { createTodo, changedTodoChecked };
})();

const domManager = (function() {
    const projects = document.querySelector('.projects');
    const todos = document.querySelector('.todos__list');

    function displayTodo(todo) {
        const todoItem = `
                <div class="todo__item ${ todo.checked ? 'todo__item--checked' : '' }">
                    <span class="todo__checked" ></span>
                    <div class="todo__title">${todo.title}</div>
                    <div class="todo__description">${todo.description}</div>
                    <div class="todo__date"><span><i class="fa-solid fa-clock"></i></span>${todo.dueDate}</div>
                </div>
        `;

        const el = document.createElement('div');
        el.innerHTML = todoItem;

        const todoChecked = el.querySelector('.todo__checked');

        todoChecked.addEventListener('click', (e) => {
            // domManager.changedTodoChecked()
            console.log('change todoChecked');
        });

        todos.appendChild(el);
    }

    function changeSelectedProject(projectItem, index) {
        let previousSelected = document.querySelectorAll('.project__item--selected');
            previousSelected.forEach(el => {
                el.classList.remove('project__item--selected');
            });

            projectManager.selectProject(index);
            projectItem.innerHTML = `
                <li class="project__item project__item--selected"><a href="#">${projectList[index].name}</a></li>
            `;
    }

    function displayProject(project, index) {
        let projectItem = document.createElement('div');
        projectItem.innerHTML = `
            <li class="project__item"><a href="#">${project.name}</a></li>
        `;

        projectItem.addEventListener('click', (e) => {
            changeSelectedProject(projectItem, index);
        });

        projects.appendChild(projectItem);
    }

    function displayProjectList() {
        projects.innerHTML = '';
        projectList.forEach((project, index) => {
            displayProject(project, index);
        });
    }

    function displayTodosList(project) {
        todos.innerHTML = '';
        const projectTodos = project.todoList;
        projectTodos.forEach((todo, index) => {
            displayTodo(todo);
        });
    }

    function initDOM() {
        let addProjectBtn = document.querySelector('.add_project__button');
        addProjectBtn.addEventListener('click', (e) => {
            let projectName = document.querySelector('#projectTitle').value;
            if(!validator.isEmpty(projectName)) projectManager.createProject(projectName);
            else console.log('error, the project name cannot be empty');
        });

        let addTodoBtn = document.querySelector('.add_todo__button');
        addTodoBtn.addEventListener('click', (e) => {
            let todoTitle = document.querySelector('#todoTitle').value;
            let todoDescription = document.querySelector('#todoDescription').value;
            let todoDueDate = document.querySelector('#todoDueDate').value;
            if(!validator.isEmpty(todoTitle)){
                const newTodo = todoManager.createTodo(todoTitle, todoDescription, todoDueDate);
                projectManager.addToSelectedProject(newTodo);
            }
            else console.log('error, the todo title cannot be empty');
        });
    }

    return { displayTodo, displayProject, initDOM, displayProjectList, displayTodosList };
})();

const projectManager = (function() {
    let selectedProjectId = projectList.length > 0 ? 0 : null;

    function addToList(project) {
        projectList.push(project);
    }

    function showList() {
        for(let i = 0; i < projectList.length; i++){
            const project = projectList[i];
            domManager.displayProject(project);
        }
    }

    function createProject(projectName) {
        const newProject = new Project(projectName);
        
        projectList.push(newProject);

        if(projectList.length === 1) {
            selectProject(0);
        }

        console.log(projectList);
        domManager.displayProjectList();
        
    }

    function selectProject(projectId) {
        selectedProjectId = projectId;
        domManager.displayTodosList(projectList[selectedProjectId]);
        console.log(projectList[selectedProjectId]);
    }

    function addToSelectedProject(todo) {
        let todoList = projectList[selectedProjectId].todoList;
        todoList.push(todo);
        domManager.displayTodosList(projectList[selectedProjectId]);
    }

    return {addToList, showList, createProject, selectProject, addToSelectedProject};
})();


domManager.initDOM();