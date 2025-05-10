import { Button } from "./Button.tsx";
import {TaskType} from "./TodoListItem.tsx";


type TasksListPropsType = {
    tasks: TaskType[]
    deleteTask: (taskId: string) => void
}

export const TasksList = ({tasks, deleteTask}: TasksListPropsType) => {

    const tasksList = tasks.length === 0
        ? <p>Your List is Empty</p>
        : <ul>
            {tasks.map(task => {
                // TODO debugger
                return (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                        <Button onClickHandler={() => deleteTask(task.id)} title='x'/>
                    </li>
                )})}
        </ul>


    return (
        <ul>
            {tasksList}
        </ul>
    );
};

