import './App.css'
import {TaskType, TodoListItem} from "./TodoListItem.tsx";
import {useState} from "react";

export const App = () => {
    // BLL
    const todoListTitle = 'What to learn'

   const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])

    const deleteTask = (taskId: number) => {
        const nextState: TaskType[] = tasks.filter(task => task.id !== taskId) // получаем новый массив, который не содержит удаленную таску
        setTasks(nextState) // передаем в Реакт наше новое состояние (новый набор данных)
    }

const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

let filteredTasks: TaskType[] = [];
    if(filter === 'all') {
        filteredTasks = tasks
    }
    if(filter === 'active') {
        filteredTasks = tasks.filter(task => !task.isDone) // TODO task.isDone === false  =  !task.isDone
    }
    if(filter === 'completed') {
        filteredTasks = tasks.filter(task => task.isDone) // TODO task.isDone === true  =  task.isDone
    }

    // const tasks =array[0]
    // const setTasks = array[1]

    // UI
    return (
        <div className={'app'}>
            <TodoListItem
                title={todoListTitle}
                tasks={filteredTasks} // передаем только отфильтрованные/проверенные таски
                deleteTask={deleteTask}
            />
        </div>
    )
}


// TODO TaskType[] === Array<TaskType>