import { useContext } from "react";
import { taksListContext } from "../../context/TasksContext";

const Modal = ({showModal, setModal}) => {
    const {addTask} = useContext(taksListContext)
    function onSubmit(event) {
        console.log(event.target[1].value);
        addTask(event.target[1].value);
        event.preventDefault();
    }
    return ( 
        <form onSubmit={onSubmit}>

            <div className="modal fade show" 
                id="exampleModal"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                style={{display: showModal ? "block" : "none"}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            aria-label="Close"
                            onClick={()=>setModal(false)}>
                            </button>
                        </div>
                        <div className="modal-body">                           
                            <div className="mb-3">
                                
                                    <label className="col-form-label">Tarea:</label>
                                    <input type="text" className="form-control" id="task-name"/>
                            </div>                            
                        </div>
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-secondary" 
                                data-bs-dismiss="modal">Cancelar
                            </button>
                            <button 
                                type="submit" 
                                className="btn btn-primary">
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Modal;