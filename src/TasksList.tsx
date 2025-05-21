import {Button} from "./Button.tsx";
import {TaskType} from "./TodoListItem.tsx";


type TasksListPropsType = {
    tasks: TaskType[]
    deleteTask: (taskId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export const TasksList = ({tasks, deleteTask, changeTaskStatus}: TasksListPropsType) => {

    const tasksList = tasks.length === 0
        ? <p>Your List is Empty</p>
        : <ul>
            {tasks.map(task => {
                // TODO debugger
                return (
                    // TODO key задается любому внешнему элементу списка
                    <li key={task.id}>
                        <input type="checkbox"
                               checked={task.isDone}
                               onChange={(e) => changeTaskStatus(task.id, e.currentTarget.checked)}/>
                        {/*TODO (e) - event (объект-событие. генерируется браузером при наступлении любого события)*/}
                        <span>{task.title}</span>
                        <Button onClickHandler={() => deleteTask(task.id)} title='x'/>
                    </li>
                )
            })}
        </ul>


    return (
        <ul>
            {tasksList}
        </ul>
    );
};

