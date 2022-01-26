import ListadoItem from "./ListadoItem";

const ListadoTasks = ({listado}) => {
    return ( 
        <div>
            {listado.map(tarea=>{
                return (
                    <ListadoItem key={tarea.nombre} {...tarea} />
                )
            })}
        </div>
     );
}
export default ListadoTasks;