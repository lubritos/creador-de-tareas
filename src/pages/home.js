import { useState } from "react";
import Search from "../components/Search/Search";
import ListadoItem from "../components/Tasks/ListadoItem";
import ListadoTasks from "../components/Tasks/ListadoTasks";

const Home =()=>{
    const listado = [
        {
            nombre:'cortar el pasto'
        },
        {
            nombre:'limpiar la pileta'
        },
        {
            nombre:'pasear al perro'
        },
        {
            nombre:'pintar mueble'
        }
    ];
    const [busqueda, setBusqueda]= useState(listado)
    const buscador = (valor)=>{
        const tareasFiltradas = listado.filter((tarea) => tarea.nombre.includes(valor));
        setBusqueda(tareasFiltradas);
    };

    return (
        <div>
            <h1>pagina home</h1>
            <Search search={buscador}/>
            <ListadoTasks listado={busqueda} />
        </div>
    )
}
export default Home;