import { ENTER_KEY, c, d, j, ls } from './helpers'

export default class ToDoList {
    constructor(key) {
        this.key = key

        if (!ls.getItem(key))
            ls.setItem(key, j.stringify([]))
    }
    addTask(e) {
        //alert('funciona')
        if (!e.target.value)
            alert('No puedes agregar tareas vacias')

        if (e.keyCode === ENTER_KEY) {
            let newTask = new Task(e.target.value)
        }
    }
    render() {
        task.addEventListener('keyup', this.addTask)
    }
}