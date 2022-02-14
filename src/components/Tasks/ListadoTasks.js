import ListadoItem from "./ListadoItem";

const ListadoTasks = ({listado, handleDelete, handleEdit }) => {
    return ( 
        <div className="list-group">
            {listado.map(tarea=>{
                return (
                    <ListadoItem key={tarea.id} {...tarea} handleDelete={handleDelete} handleEdit={handleEdit}/>
                )
            })}
        </div>
    );
}
export default ListadoTasks;