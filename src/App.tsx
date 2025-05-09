import './App.css'
import {TaskType, TodoListItem} from "./TodoListItem.tsx";
import {useState} from "react";


// TODO самовызывающаяся функция IIFE
// const [a, b] = (function () {
//     return [465, () => alert('yo!')]
// })()   // пишем функцию и сразу же ее вызываем (в той же строке)

// (function () {
//     console.log('Hello!')
// })()



export type FilterValuesType = 'all' | 'active' | 'completed'

//CRUD

export const App = () => {
    // BLL
    const todoListTitle: string = 'What to learn'

   const [tasks, setTasks] = useState<TaskType[]>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])

    const deleteTask = (taskId: number) => {
        const nextState: TaskType[] = tasks.filter(task => task.id !== taskId) // TODO получаем новый массив, который не содержит удаленную таску
        setTasks(nextState) // TODO передаем в React наше новое состояние (новый набор данных)
    }


// UI
const [filter, setFilter] = useState<FilterValuesType>('all')

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

    const changeTodolistFilter = (newFilterValue: FilterValuesType) => {
        setFilter(newFilterValue)
    }

    // const tasks =array[0]
    // const setTasks = array[1]


    return (
        <div className={'app'}>
            <TodoListItem
                title={todoListTitle}
                tasks={filteredTasks} // TODO передаем только отфильтрованные/проверенные таски
                deleteTask={deleteTask}
                changeTodolistFilter={changeTodolistFilter}
            />
        </div>
    )
}


// TODO TaskType[] === Array<TaskType>