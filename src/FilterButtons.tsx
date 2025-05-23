import {Button} from "./Button.tsx";
import {FilterValuesType} from "./App.tsx";

type FilterButtonsPropsType = {
    changeTodolistFilter: (newFilterValue: FilterValuesType) => void
    filter: FilterValuesType
}

export const FilterButtons = ({changeTodolistFilter, filter}: FilterButtonsPropsType) => {
    return (
        <div className="buttons-wrapper">
            <Button className={filter === 'all' ? 'filter-btn-active' : undefined}
                    onClickHandler={() => changeTodolistFilter('all')}
                    title={'All'} />
            <Button className={filter === 'active' ? 'filter-btn-active' : undefined}
                    onClickHandler={() => changeTodolistFilter('active')}
                    title={'Active'} />
            <Button className={filter === 'completed' ? 'filter-btn-active' : undefined}
                    onClickHandler={() => changeTodolistFilter('completed')}
                    title={'Completed'} />
        </div>
    );
};

