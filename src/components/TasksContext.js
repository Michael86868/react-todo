import { createContext, useContext, useReducer } from "react";

export const TasksContext = createContext(null)
export const TasksDispatchContext = createContext(null)

const tasksReducer = (tasks, action) => {
    switch(action.type){
        case 'added': return [...tasks, { id: initialTasks.length, text: action.text, done: false }]
        case 'changed': return tasks.map((task) => (task.id === action.task.id) ? action.task : task)
        case 'deleted': return tasks.filter((task) => task.id !== action.id)
        default: throw Error('Špatná akce.')
    }
}

const TasksProvider = ({ children }) => {
    const [ tasks, dispatch ] = useReducer(tasksReducer, initialTasks);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    );
}

export const useTasksDispatch = () => useContext(TasksDispatchContext);
export const useTasks = () => useContext(TasksContext);

export const initialTasks = [
    {
        id: 0,
        text: 'Task 1',
        done: true,
    },
    {
        id: 1,
        text: 'Task 2',
        done: false,
    },
    {
        id: 2,
        text: 'Task 3',
        done: false,
    },
]

export default TasksProvider;