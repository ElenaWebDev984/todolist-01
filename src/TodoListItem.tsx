import {TodoListTitle} from "./TodoListTitle.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import {TasksList} from "./TasksList.tsx";
import {FilterButtons} from "./FilterButtons.tsx";

type TodoListItemPropsType = {
    title: string
    tasks: TaskType[]
    deleteTask: (taskId: number) => void // TODO void - означает, что мы передаем в параметрах функцию, у которой отсутствует явный return
}


export type TaskType = {
    id: number
    title: string
    isDone: boolean
}


export const TodoListItem = (props: TodoListItemPropsType) => {
    const {title, tasks, deleteTask} = props
    return (
        <div>
            <TodoListTitle title={title} />
            <AddTaskForm />
            <TasksList tasks={tasks} deleteTask={deleteTask} />
            <FilterButtons />
        </div>
    );
};


