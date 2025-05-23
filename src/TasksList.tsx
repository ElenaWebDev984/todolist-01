import {Button} from "./Button.tsx";
import {TaskType} from "./TodoListItem.tsx";
import {ChangeEvent} from "react";


type TasksListPropsType = {
    tasks: TaskType[]
    deleteTask: (taskId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export const TasksList = ({tasks, deleteTask, changeTaskStatus}: TasksListPropsType) => {

    const tasksList = tasks.length === 0
        ? <p>Your List is Empty</p>
        : <ul className='tasks-list'>
            {tasks.map(task => {
                const deleteTaskHandler = () => deleteTask(task.id)
                const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => changeTaskStatus(task.id, e.currentTarget.checked)

                // TODO debugger
                return (
                    // TODO key задается любому внешнему элементу списка
                    <li key={task.id} className={task.isDone ? 'task-done' : 'task'}>
                        <input type="checkbox"
                               checked={task.isDone}
                               onChange={changeTaskStatusHandler}/>
                        {/*TODO (e) - event (объект-событие. генерируется браузером при наступлении любого события)*/}
                        <span>{task.title}</span>
                        <Button onClickHandler={deleteTaskHandler} title='x'/>
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

