type ButtonPropsType = {
    title: string
    onClickHandler?: () => void // TODO void - это пустоту . Функция без явного return. она ничего не получает в параметрах и ничего не возвращает (возвращает undefined)
    disabled?: boolean
    className?: string
}



export const Button = ({title, onClickHandler, disabled, className}: ButtonPropsType) => {
    return <button className={className}
                   onClick={onClickHandler}
                   disabled={disabled}>{title}</button>
};

