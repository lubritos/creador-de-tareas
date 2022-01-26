import ListadoTasks from "../components/Tasks/ListadoTasks";

const Home =()=>{
    const listado = [
        {
            nombre:'cortar el pasto'
        },
        {
            nombre:'limpiar la pileta'
        },
        {
            nombre:'pasear al perro'
        },
        {
            nombre:'pintar mueble'
        }
    ];

    return (
        <div>
            <h1>pagina home</h1>
            <ListadoTasks listado={listado} />
        </div>
    )
}
export default Home;