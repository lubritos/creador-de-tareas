import ListadoItem from "./ListadoItem";

const ListadoTasks = ({listado}) => {
    return ( 
        <div className="list-group">
            {listado.map(tarea=>{
                return (
                    <ListadoItem key={tarea.nombre} {...tarea} />
                )
            })}
        </div>
    );
}
export default ListadoTasks;