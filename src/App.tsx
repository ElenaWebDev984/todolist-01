import './App.css'
import {TaskType, TodoListItem} from "./TodoListItem.tsx";

export const App = () => {
    // BLL
    const todoListTitle_1 = 'What to learn'
    const todoListTitle_2 = 'What to buy'

    const task_1: TaskType[] = [
        {id: 1, title: 'HTML', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS/TS', isDone: false},
    ]
    const task_2: Array<TaskType> = [
        {id: 5, title: 'apple', isDone: true},
        {id: 6, title: 'meat', isDone: true},
        {id: 7, title: 'wine', isDone: false},
    ]

    // TaskType[] === Array<TaskType>

    // UI
    return (
        <div className={'app'}>
            <TodoListItem title={todoListTitle_1} tasks={task_1}  />
            <TodoListItem title={todoListTitle_2} tasks={task_2} />
        </div>
    )
}


