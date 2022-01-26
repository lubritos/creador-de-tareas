const ListadoItem = ({nombre}) => {
    return (  
        <div key={nombre}>
            <h2>{nombre}</h2>
        </div>
    );
}

export default ListadoItem;