import List from "./todosList"
import { useDispatch} from 'react-redux';
import { todoAdded } from "./todosSlicer";


const Todos = () =>{
 
    const dispatch= useDispatch()
    function enterKeyPressed(e){
        if(e.keyCode ==13){
        e.preventDefault()
        dispatch(todoAdded(e.target.value))
        }   
    }

   
    return (
        <main>              
            <form > 
                <input type="text" id="description" placeholder="What needs to be done?" required onKeyDown={enterKeyPressed}></input>
                <label htmlFor="description"></label>  
            </form>
            <hr></hr>
            <List/>
        </main>

    )
}
export default Todos