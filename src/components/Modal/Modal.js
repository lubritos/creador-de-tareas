import { useContext, useEffect, useRef } from "react";
import { taksListContext } from "../../context/TasksContext";

const Modal = ({showModal, setModal, itemId}) => {
    const inputRef = useRef(null);
    const {tasks, addTask, editTask} = useContext(taksListContext)

    function onSubmit(event) {
        if(itemId) {
            editTask(event.target[1].value, itemId);
        } else {
            addTask(tasks.length + 1, event.target[1].value);
        }
        setModal(false);
        inputRef.current.value = '';
        event.preventDefault();
    }

    useEffect (()=>{
        if(itemId) {
            const task = tasks.filter((task) => task.id === itemId)
            if (task.length) {
                inputRef.current.value = task[0].nombre;
            }
        }
    })

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="modal fade show align-items-center" 
                    id="exampleModal"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                    style={{display: showModal ? "flex" : "none"}}>
                    <div className="modal-dialog w-75">
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
                                    <input type="text" ref={inputRef} className="form-control" id="task-name"/>
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
            {showModal && <div className="modal-backdrop fade show"></div>}
        </>
    );
}

export default Modal;