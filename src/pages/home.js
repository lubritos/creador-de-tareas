import { useContext, useEffect, useState } from "react";
import Modal from "../components/Modal/Modal";
import Search from "../components/Search/Search";
import ListadoTasks from "../components/Tasks/ListadoTasks";
import { taksListContext } from "../context/TasksContext";

const Home =()=>{
    const {tasks} = useContext(taksListContext)
    const [busqueda, setBusqueda]= useState(tasks)
    const [modal, setModal]= useState(false)
        
    const buscador = (valor)=>{
        const tareasFiltradas = tasks.filter((tarea) => tarea.nombre.includes(valor));
        setBusqueda(tareasFiltradas);
    };

    useEffect(() => {
        setBusqueda(tasks)
    }, [setModal, tasks])

    return (
        <div>
            <h1>pagina home</h1>
            <Search search={buscador} setModal={setModal}/>
            <ListadoTasks listado={busqueda} />
            <Modal showModal={modal} setModal={setModal}/>
        </div>
    )
}
export default Home;