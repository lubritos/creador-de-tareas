import {createContext, useEffect, useState  } from "react"
// import {v4 as uuidv4} from 'uuid'

export const taksListContext = createContext()

const TaskListContextProvider = ({children})=>{
    const InitialState = [
        {   
            id: 1,
            nombre:'cortar el pasto'
        },
        {
            id: 2,
            nombre:'limpiar la pileta'
        },
        {
            id: 3,
            nombre:'pasear al perro'
        },
        {
            id:4,
            nombre:'pintar mueble'
        }
    ];
    const [tasks, setTasks] = useState(InitialState);
    const [editItem, setEditItem] = useState(null);

    const addTask = (id, title) => {
        setTasks([...tasks,{id: id, nombre: title}]);
    };

    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id));
    };
    const clearList = ()=>{
        setTasks([]);

    };
    const findItem = id => {
        setEditItem(tasks.find(task=> task.id === id));
    };

    const editTask = (title , id)=>{
        const newTask = tasks.map((task) => task.id === id ? {nombre: title, id} : task);
        setTasks(newTask);
        setEditItem(null);
    };

    useEffect(()=> {
        // localStorage.setItem('task', JSON.stringidfy(tasks))
    }, [tasks] );

    return (
        <taksListContext.Provider value = {
            {
                tasks,
                addTask,
                editTask,
                removeTask,
                findItem,
                editItem,
                clearList
            }
        }>
            {children}
        </taksListContext.Provider>
    );
};

export default TaskListContextProvider;