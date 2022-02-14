import { useContext, useEffect, useState } from "react";
import Modal from "../components/Modal/Modal";
import Search from "../components/Search/Search";
import ListadoTasks from "../components/Tasks/ListadoTasks";
import { taksListContext } from "../context/TasksContext";

const Home =()=>{
    const {tasks, removeTask} = useContext(taksListContext)
    const [busqueda, setBusqueda]= useState(tasks)
    const [modal, setModal]= useState(false)
        
    const buscador = (valor)=>{
        const tareasFiltradas = tasks.filter((tarea) => tarea.nombre.includes(valor));
        setBusqueda(tareasFiltradas);
    };

    function handleDelete(id){
        removeTask(id);
    }

    useEffect(() => {
        setBusqueda(tasks);
    }, [setModal, tasks])

    return (
        <div className="d-flex justify-content-center m-5 p-3">
            <div className="d-flex justify-content-center flex-column w-50">
                <h1 className="title m-3">ToDo List</h1>
                <Search search={buscador} setModal={setModal}/>
                <div className="mb-3" />
                <ListadoTasks listado={busqueda} handleDelete={handleDelete}/>
                <Modal showModal={modal} setModal={setModal}/>
            </div>
        </div>
    )
}
export default Home;