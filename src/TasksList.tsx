import {TaskType} from "./TodoListItem.tsx";


type TasksListPropsType = {
    tasks: TaskType[]
    deleteTask: (taskId: number) => void
}

export const TasksList = ({tasks, deleteTask}: TasksListPropsType) => {

    const tasksList = tasks.length === 0
        ? <p>Your List is Empty</p>
        : <ul>
            {tasks.map(task => {
                // debugger
                return (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                        <button onClick={() => deleteTask(task.id)}>x</button>
                    </li>
                )})}
        </ul>


    return (
        <ul>
            {tasksList}
        </ul>
    );
};

