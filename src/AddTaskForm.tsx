import {Button} from "./Button.tsx";
import {useState} from "react";

type AddTaskFormProps = {
    createTask: (title: string) => void
}


// TODO создаем контролируемый input

export const AddTaskForm = ({createTask}: AddTaskFormProps) => {
    const [taskTitle, setTaskTitle] = useState("");
    console.log(taskTitle);

    const createTaskHandler = () => {
        const trimmedTitle = taskTitle.trim();
        if (trimmedTitle) {
            createTask(taskTitle);
        }
        setTaskTitle("");
    }

    return (
        <div className='input-wrapper'>
            <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.currentTarget.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && taskTitle && taskTitle.length <= 10) {
                        createTaskHandler();
                    }
                }}/>
            <Button title={'+'} onClickHandler={createTaskHandler}
                    disabled={!Boolean(taskTitle) || taskTitle.length > 10}/>
            {!taskTitle && <div className='required'>Task title is required</div>}
            {taskTitle && taskTitle.length <= 10 && <div>Title should be max 10 characters</div>}
            {taskTitle.length > 10 && <div style={{color: 'red'}}>Title is too long</div>}
        </div>
    );
};

