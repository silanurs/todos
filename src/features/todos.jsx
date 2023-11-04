import List from "./todosList"

const Todos = () =>{
    return (
        <main>              
            <form>
                <div className="round">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox" title="Completed"></label>
                </div>
                <input type="text" id="description" size="50" placeholder="What needs to be done?" required></input>
                <label htmlFor="description"></label>
                <input type="date" id="date" required></input>
                <label htmlFor="date"></label>
                <span className="delete">&#215;</span>
            </form>
            <hr></hr>
            <List/>
        </main>

    )
}
export default Todos