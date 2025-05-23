import './App.css'
import {TaskType, TodoListItem} from "./TodoListItem.tsx";
import {useState} from "react";
import {v1} from "uuid";


// TODO самовызывающаяся функция IIFE
// const [a, b] = (function () {
//     return [465, () => alert('yo!')]
// })()   // пишем функцию и сразу же ее вызываем (в той же строке)

// (function () {
//     console.log('Hello!')
// })()



export type FilterValuesType = 'all' | 'active' | 'completed'

// TODO CRUD

export const App = () => {

    // console.log(typeof v1())

    // TODO DATA (model, BLL) => action
    const todoListTitle: string = 'What to learn'

   const [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'ReactJS', isDone: false},
        {id: v1(), title: 'Redux', isDone: false},
        {id: v1(), title: 'Typescript', isDone: false},
        {id: v1(), title: 'RTK query', isDone: false},
    ])

    // const tasks = array[0]
    // const setTasks = array[1]

    // delete
    const deleteTask = (taskId: string) => {
        const nextState: TaskType[] = tasks.filter(task => task.id !== taskId) // TODO получаем новый массив, который не содержит удаленную таску
        setTasks(nextState) // TODO передаем в React наше новое состояние (новый набор данных)
    }

    // create
    const createTask = (title: string) => {
        //  TODO long variant
        //  const newTask: TaskType = {
        //      id: v1(),
        //      title: title,
        //      isDone: false,
        //  }
        // const nextState: TaskType[] = [...tasks, newTask]
        // setTasks(nextState)
        // TODO short variant
        setTasks([...tasks, {id: v1(), title, isDone: false}])
    }

//     update tasks => update tasks status (isDone)

    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        // TODO выполняем выборочное/условное преобразование массива
        // TODO variant 1
        const nextState: TaskType[] = tasks.map(task => task.id === taskId ? {...task, isDone: isDone} : task)  // TODO added new status for task
        setTasks(nextState)
        // TODO variant 2
        setTasks(tasks.map(task => task.id === taskId ? {...task, isDone: !task.isDone} : task))
    }



// TODO UI (view) => element for arion ('form', 'button') +
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



    return (
        <div className={'app'}>
            <TodoListItem
                title={todoListTitle}
                tasks={filteredTasks} // TODO передаем только отфильтрованные/проверенные таски
                deleteTask={deleteTask}
                changeTodolistFilter={changeTodolistFilter}
                createTask={createTask}
                changeTaskStatus={changeTaskStatus}
                filter={filter}
            />
        </div>
    )
}


// TODO TaskType[] === Array<TaskType>