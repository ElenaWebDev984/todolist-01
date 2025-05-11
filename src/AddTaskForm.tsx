import {Button} from "./Button.tsx";
import {useState} from "react";

type AddTaskFormProps = {
    createTask: (title: string) => void
}


// TODO создаем контролируемый input

export const AddTaskForm = ({createTask}: AddTaskFormProps) => {
    const [taskTitle, setTaskTitle] = useState("New Task");

    const createTaskHandler = () => {
        createTask(taskTitle);
    }

    return (
        <div>
            <input value={taskTitle}
            onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
            <Button title={'+'} onClickHandler={createTaskHandler} />
        </div>
    );
};

