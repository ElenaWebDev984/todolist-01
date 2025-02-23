import './App.css'
import {TodoListItem} from "./TodoListItem.tsx";

export const App = () => {
    return (
        <div className={'app'}>
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    )
}


