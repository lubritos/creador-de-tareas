import ListadoItem from "./ListadoItem";

const ListadoTasks = ({listado}) => {
    return ( 
        <div className="list-group">
            {listado.map(tarea=>{
                return (
                    <ListadoItem key={tarea.id} {...tarea} />
                )
            })}
        </div>
    );
}
export default ListadoTasks;