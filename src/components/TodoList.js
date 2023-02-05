import { useState } from 'react';
import '../styles/TodoList.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTasks, useTasksDispatch } from "./TasksContext";

const TodoList = () => {
    const tasks = useTasks();
    return (
        <ul className={'list-group border-0 todo-list-shadow mt-5'}>
            {tasks.map((task) => (
                <li key={task.id}
                    className={'px-5 py-4 bg-transparent text-light h4 list-group-item d-flex justify-content-between mb-0'}>
                    <TodoItem task={task} />
                </li>
            ))}
        </ul>
    );
}

const TodoItem = ({ task }) => {
    const [ isEditing, setIsEditing ] = useState(false);
    const dispatch = useTasksDispatch();

    return (
        <>
            <div className={'d-flex align-items-center gap-3'}>
                <input
                    className="form-check-input rounded-circle bg-transparent border-1 border-dark p-2 my-auto"
                    type="checkbox"
                    checked={task.done}
                    onChange={(e) => dispatch({ type: 'changed', task: { ...task, done : e.target.checked } })}
                />
                {(isEditing) ?
                    <input
                        value={task.text}
                        className={'bg-transparent border-0 text-light p-0 m-0 h4'}
                        style={{ outline: 'none' }}
                        onChange={(e) => dispatch({ type: 'changed', task: { ...task, text : e.target.value } })}
                        onKeyDown={(e) => (isEditing) && (e.key === 'Enter') && setIsEditing(!isEditing) }
                    /> :
                    <span>{task.text}</span>}
            </div>
            <div className={'d-flex gap-3 justify-content-end'}>
                <FontAwesomeIcon
                    icon={isEditing ? 'save' : 'edit'}
                    className={isEditing ? 'text-success' : 'text-warning'}
                    onClick={() => setIsEditing(!isEditing)}
                />
                <FontAwesomeIcon
                    icon="trash"
                    className={'text-danger'}
                    style={{ cursor: 'pointer' }}
                    onClick={() => dispatch({ type: 'deleted', id: task.id })}
                />
            </div>
        </>
    );
}

export default TodoList;