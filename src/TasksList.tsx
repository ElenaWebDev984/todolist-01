

export const TasksList = () => {
    return (
        <ul>
            <li>
                <input type="checkbox" checked={true}/> <span>HTML&CSS</span>
            </li>
            <li>
                <input type="checkbox" checked={true}/> <span>JS</span>
            </li>
            <li>
                <input type="checkbox" checked={false}/> <span>React</span>
            </li>
        </ul>
    );
};

