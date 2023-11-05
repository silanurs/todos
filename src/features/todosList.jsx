import {useSelector} from 'react-redux'


const List = () => {
    const todos = useSelector((state)=> state.todo.list)
    console.log(todos)
    return (
        <article>
            {todos.map((todo) => {
                return <div key="1" id="list">
                <div className="round">
                  <input type="checkbox" className="checkbox" />
                  <label htmlFor="checkbox" title="Completed"></label>
                </div>
                <div>{todo.description}</div>
                <div className="delete">&#215;</div>
                </div>
            }) }

        </article>
    )
}
export default List