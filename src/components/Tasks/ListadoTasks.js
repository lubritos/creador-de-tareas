import ListadoItem from "./ListadoItem";

const ListadoTasks = ({listado, handleDelete }) => {
    return ( 
        <div className="list-group">
            {listado.map(tarea=>{
                return (
                    <ListadoItem key={tarea.id} {...tarea} handleDelete={handleDelete} />
                )
            })}
        </div>
    );
}
export default ListadoTasks;