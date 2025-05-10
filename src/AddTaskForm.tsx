import {Button} from "./Button.tsx";
import {useRef} from "react";

type AddTaskFormProps = {
    createTask: (title: string) => void
}



export const AddTaskForm = ({createTask}: AddTaskFormProps) => {
    const taskTitleInput = useRef<HTMLInputElement>(null);

    const createTaskHandler = () => {
        if (taskTitleInput.current) {
            createTask(taskTitleInput.current.value)
            taskTitleInput.current.value = ''
        }
    }

    return (
        <div>
            <input ref={taskTitleInput}/>
            <Button title={'+'} onClickHandler={createTaskHandler} />
        </div>
    );
};

