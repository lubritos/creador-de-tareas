const ListadoItem = ({nombre}) => {
    return (
        <button key={nombre} 
            type="button" 
            className="list-group-item list-group-item-action" 
            aria-current="true">
            {nombre}
        </button>
    );
}

export default ListadoItem;