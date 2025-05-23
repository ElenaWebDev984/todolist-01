import {Button} from "./Button.tsx";
import {useState} from "react";

type AddTaskFormProps = {
    createTask: (title: string) => void
}


// TODO создаем контролируемый input

export const AddTaskForm = ({createTask}: AddTaskFormProps) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [error, setError] = useState<boolean>(false);

    const createTaskHandler = () => {
        const trimmedTitle = taskTitle.trim();
        if (trimmedTitle) {
            createTask(taskTitle);
        } else {
            setError(true);
        }
        setTaskTitle("");
    }

    return (
        <div className='input-wrapper'>
            <input
                value={taskTitle}
                className={!!error ? "error" : undefined}
                onChange={(e) => {
                    error && setError(false);
                    if (taskTitle.length < 10) {
                        setTaskTitle(e.currentTarget.value)
                    }
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && taskTitle && taskTitle.length <= 10) {
                        createTaskHandler();
                    }
                }}/>
            <Button title={'+'} onClickHandler={createTaskHandler}
                    disabled={!Boolean(taskTitle) || taskTitle.length > 10}/>
            {!taskTitle && <div className='text-error'>Task title is required</div>}
            {taskTitle && taskTitle.length <= 10 && <div className='text-error'>Title should be max 10 characters</div>}
            {taskTitle.length > 10 && <div className='text-error'>Title is too long</div>}
        </div>
    );
};

