const Search =({search, setModal})=>{
    function handleChange(event) {
        search(event.target.value)
    }
    return (
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <div className="d-flex">
                        <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        onChange={handleChange}
                        />
                        <button className="btn btn-outline-success"
                        onClick={()=>setModal(true)}>Nuevo</button>
                    </div>
                </div>
            </nav>
    )
}
export default Search;

