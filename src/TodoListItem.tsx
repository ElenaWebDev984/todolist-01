import {TodoListTitle} from "./TodoListTitle.tsx";
import {AddTaskForm} from "./AddTaskForm.tsx";
import {TasksList} from "./TasksList.tsx";
import {FilterButtons} from "./FilterButtons.tsx";
import {FilterValuesType} from "./App.tsx";

type TodoListItemPropsType = {
    title: string
    tasks: TaskType[]
    deleteTask: (taskId:string) => void // TODO void - означает, что мы передаем в параметрах функцию, у которой отсутствует явный return
    changeTodolistFilter: (newFilterValue: FilterValuesType) => void
}


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}


export const TodoListItem = (props: TodoListItemPropsType) => {
    const {title, tasks, deleteTask, changeTodolistFilter} = props
    return (
        <div>
            <TodoListTitle title={title} />
            <AddTaskForm />
            <TasksList tasks={tasks} deleteTask={deleteTask} />
            <FilterButtons changeTodolistFilter={changeTodolistFilter} />
        </div>
    );
};


