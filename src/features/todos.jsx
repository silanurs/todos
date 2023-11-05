import List from "./todosList"
import {useSelector, useDispatch} from 'react-redux';
import { todoAdded } from "./todosSlicer";

const Todos = () =>{
    const todos = useSelector((state) => state.todos)
    const dispatch= useDispatch()
    console.log(todos)
    return (
        <main>              
            <form>
                <div className="round">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="checkbox" title="Completed"></label>
                </div>
                <input type="text" id="description" placeholder="What needs to be done?" required></input>
                <label htmlFor="description"></label>
                <input type="date" id="date" required></input>
                <label htmlFor="date"></label>
                
            </form>
            <hr></hr>
            <List/>
        </main>

    )
}
export default Todos