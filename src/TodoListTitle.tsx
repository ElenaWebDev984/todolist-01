type TodoListTitlePropsType = {
    title: string
    className: string
}

export const TodoListTitle = ({title, className}: TodoListTitlePropsType) => {
    return (
        <h3 className={className}>{title}</h3>
    );
};

