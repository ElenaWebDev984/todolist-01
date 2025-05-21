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
    createTask: (title: string) => void
    changeTaskStatus: (taskId: string) => void
}


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

// TODO Выносим заглушку в константу (вне компонента)
export const noop = () => {}; // TODO ← "no operation" (пустая функция)


export const TodoListItem = (props: TodoListItemPropsType) => {
    // TODO ← все пропсы в консоли
    console.log("TodoListItem props:", props);

    const {title, tasks, deleteTask, changeTodolistFilter, createTask, changeTaskStatus} = props
    return (
        <div>
            <TodoListTitle title={title} />
            <AddTaskForm createTask={createTask} />
            <TasksList tasks={tasks}
                       deleteTask={deleteTask}
                       changeTaskStatus={changeTaskStatus}/>
            <FilterButtons changeTodolistFilter={changeTodolistFilter} />
        </div>
    );
};


