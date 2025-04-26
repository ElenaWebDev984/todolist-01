import {Button} from "./Button.tsx";
import {FilterValuesType} from "./App.tsx";

type FilterButtonsPropsType = {
    changeTodolistFilter: (newFilterValue: FilterValuesType) => void
}

export const FilterButtons = ({changeTodolistFilter}: FilterButtonsPropsType) => {
    return (
        <div>
            <Button onClickHandler={() => changeTodolistFilter('all')} title={'All'} />
            <Button onClickHandler={() => changeTodolistFilter('active')} title={'Active'} />
            <Button onClickHandler={() => changeTodolistFilter('completed')} title={'Completed'} />
        </div>
    );
};

