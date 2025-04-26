type ButtonPropsType = {
    title: string
    onClickHandler: () => void // void - это пустоту . Функция без явного return. она ничего не получает в параметрах и ничего не возвращает (возвращает undefined)
}



export const Button = ({title, onClickHandler}: ButtonPropsType) => {
    return <button onClick={onClickHandler}>{title}</button>
};

