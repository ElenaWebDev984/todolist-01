import {TaskType} from "./TodoListItem.tsx";


type TasksListPropsType = {
    tasks: TaskType[]
}

export const TasksList = ({tasks}: TasksListPropsType) => {

    const tasksList = tasks.length === 0
        ? <p>Your List is Empty</p>
        : <ul>
            {tasks.map(task => {
                // debugger
                return (
                    <li key={task.id}>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.title}</span>
                    </li>
                )})}
        </ul>


    return (
        <ul>
            {tasksList}
        </ul>
    );
};

