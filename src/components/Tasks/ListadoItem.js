import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

const ListadoItem = ({id, nombre, handleDelete, handleEdit}) => {
    return (
        <div key={nombre} 
            className="d-flex list-group-item list-group-item-action w-100 justify-content-evenly text-capitalize name-task" 
            aria-current="true">
                <div className="c-grey fs-5">
                    {nombre}
                </div>
                <div className="d-flex justify-content-end">
                    <div className="mx-2" onClick={() => handleEdit(id)}> 
                        <FontAwesomeIcon icon={faPencil} />
                    </div>
                    <div className="mx-2" onClick={() => handleDelete(id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </div>

                </div>
        </div>
    );
}

export default ListadoItem;