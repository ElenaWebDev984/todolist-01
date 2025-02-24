import {TodoListTitle} from "./TodoListTitle.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import {TasksList} from "./TasksList.tsx";
import {FilterButtons} from "./FilterButtons.tsx";

type TodoListItemPropsType = {
    title: string
    tasks: TaskType[]
}


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}


export const TodoListItem = (props: TodoListItemPropsType) => {
    return (
        <div>
            <TodoListTitle title={props.title} />
            <AddTaskForm />
            <TasksList tasks={props.tasks} />
            <FilterButtons />
        </div>
    );
};


