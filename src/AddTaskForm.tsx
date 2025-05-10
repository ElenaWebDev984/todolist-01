import {Button} from "./Button.tsx";

const

const createTaskHandler = () => createTask('New Task')

export const AddTaskForm = () => {
    return (
        <div>
            <input/>
            <Button title={'+'} onClickHandler={createTaskHandler} />
        </div>
    );
};

