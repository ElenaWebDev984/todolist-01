import {TodoListTitle} from "./TodoListTitle.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import {TasksList} from "./TasksList.tsx";
import {FilterButtons} from "./FilterButtons.tsx";


export const TodoListItem = () => {
    return (
        <div>
            <TodoListTitle />
            <AddTaskForm />
            <TasksList />
            <FilterButtons />
        </div>
    );
};


