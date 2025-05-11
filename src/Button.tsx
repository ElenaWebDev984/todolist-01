type ButtonPropsType = {
    title: string
    onClickHandler?: () => void // TODO void - это пустоту . Функция без явного return. она ничего не получает в параметрах и ничего не возвращает (возвращает undefined)
    disabled?: boolean
}



export const Button = ({title, onClickHandler, disabled}: ButtonPropsType) => {
    return <button onClick={onClickHandler} disabled={disabled}>{title}</button>
};

