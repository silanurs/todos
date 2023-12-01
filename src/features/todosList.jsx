import {useSelector,useDispatch} from 'react-redux'
import { isChecked } from './todosSlicer';

const List = () => {
    const todos = useSelector((state)=> state.todo.todos)
    const dispatch=useDispatch();
    return (
        <article>
            {todos.map((todo) => {
                return <div key={todo.id} id="list">
                <input type="checkbox" className="checkbox" onClick={()=>{dispatch(isChecked())}}/>      
                <div>{todo.description}</div>
                <select id="colors" style={{width:"100px"}}>
                    <option value=""></option>
                    <option value="green" style={{color:"green"}}>Green</option>
                    <option value="blue" style={{color:"blue"}}>Blue</option>
                    <option value="orange" style={{color:"orange"}}>Orange</option>
                    <option value="yellow" style={{color:"yellow"}}>Yellow</option>
                    <option value="purple" style={{color:"purple"}}>Purple</option>
                    <option value="red" style={{color:"red"}}>Red</option>
                </select>
                <div className="delete">&#215;</div>
                
                </div>
                
            }) }

        </article>
    )
}
export default List