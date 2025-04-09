import {Button} from "./Button.tsx";
import {FilterValuesType} from "./App.tsx";

type FilterButtonsPropsType = {
    changeTodolistFilter: (newFilterValue: FilterValuesType) => void
}

export const FilterButtons = ({changeTodolistFilter}: FilterButtonsPropsType) => {
    return (
        <div>
            <Button onClick={() => changeTodolistFilter('all')} title={'All'} />
            <Button onClick={() => changeTodolistFilter('active')} title={'Active'} />
            <Button onClick={() => changeTodolistFilter('completed')} title={'Completed'} />
        </div>
    );
};

