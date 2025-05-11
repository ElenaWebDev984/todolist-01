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
        createTask(taskTitle);
        setTaskTitle("");
    }

    return (
        <div>
            <input value={taskTitle}
            onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
            <Button title={'+'} onClickHandler={createTaskHandler} />
        </div>
    );
};

