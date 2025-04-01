import './App.css'
import {TaskType, TodoListItem} from "./TodoListItem.tsx";

export const App = () => {
    // BLL
    const todoListTitle_1 = 'What to learn'

    const task_1: TaskType[] = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ]

    // TODO TaskType[] === Array<TaskType>

    // UI
    return (
        <div className={'app'}>
            <TodoListItem title={todoListTitle_1} tasks={task_1}  />
            <TodoListItem title={todoListTitle_1} tasks={task_1}  />
            <TodoListItem title={todoListTitle_1} tasks={task_1}  />
            <TodoListItem title={todoListTitle_1} tasks={task_1}  />
        </div>
    )
}


