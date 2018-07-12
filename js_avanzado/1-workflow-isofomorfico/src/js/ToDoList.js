import { ENTER_KEY, c, d, j, ls } from './helpers'
import Task from './Task'

export default class ToDoList {
    constructor(key) {
        this.key = key

        if (!ls.getItem(key))
            ls.setItem(key, j.stringify([]))

        this.addTask = this.addTask.bind(this)
        this.editTask = this.editTask.bind(this)
        this.removeTask = this.removeTask.bind(this)
    }
    addTask(e) {
        //alert('funciona')
        if (!e.target.value)
            alert('No puedes agregar tareas vacias')

        if (e.keyCode === ENTER_KEY) {
            let newTask = new Task(e.target.value),
                tasks = j.parse(ls.getItem(this.key))

            tasks.push(newTask)
            ls.setItem(this.key, j.stringify(tasks))
            this.renderTask(newTask)
            e.target.value = null
                //c(this.key, task, newTask, ls)
        }
    }
    editTask(e) {
        //c(e.target.localName)
        if (e.target.localName === 'label') {
            let tasks = j.parse(ls.getItem(this.key)),
                toEdit = tasks.findIndex(task => task.name === e.target.textContent),
                label = d.querySelector(`[data-id="${tasks[toEdit].id}"]`)
            c(tasks, toEdit, label)

            const saveTask = e => {
                e.target.textContent = e.target.textContent
                tasks[toEdit].name = e.target.textContent
                ls.setItem(this.key, j.stringify(tasks))
                e.target.blur()
            }

            label.addEventListener('blur', e => saveTask(e))
            label.addEventListener('keyup', e => (e.keyCode === ENTER_KEY) && saveTask(e))

        }
    }
    removeTask(e) {
        if (e.target.localName === 'a') {
            let tasks = j.parse(ls.getItem(this.key)),
                toRemove = tasks.findIndex(task => task.id.toString() === e.target.dataset.id)

            tasks.splice(toRemove, 1)
            ls.setItem(this.key, j.stringify(tasks))
            e.target.parentElement.remove()
        }
    }
    renderTask(task) {
        let templateTask = `
            <li class="List-item ${task.isComplete ? 'complete' : ''}">
                <input type="checkbox" id="${task.id}" class="List-checkbox ${task.isComplete ? 'complete' : ''}"> 
                <label data-id="${task.id}" class="List-label" contenteditable spellcheck>${task.name}</label>           
                <a href="#" data-id="${task.id}" class="List-removeLink">&#128465;</a>
            </li>
         `

        list.insertAdjacentHTML('beforeend', templateTask)
    }
    render() {
        let tasks = j.parse(ls.getItem(this.key)),
            listTasks = list.children
        tasks.forEach(task => this.renderTask(task))
        Array.from(listTasks).forEach(li => {
            li.querySelector('input[type="checkbox"]').addEventListener('change', e => {
                let task = tasks.filter(task => task.id.toString() === e.target.id)
                c(task)

                if (e.target.checked) {
                    e.target.parentElement.classList.add('complete')
                    task[0].isComplete = true
                } else {
                    e.target.parentElement.classList.remove('complete')
                    task[0].isComplete = false
                }
                ls.setItem(this.key, j.stringify(tasks))
            })
        })
        task.addEventListener('keyup', this.addTask)
        list.addEventListener('click', this.editTask)
        list.addEventListener('click', this.removeTask)
    }
}