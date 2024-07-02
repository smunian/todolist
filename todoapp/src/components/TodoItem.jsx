import { findRenderedDOMComponentWithClass, isElement } from 'react-dom/test-utils'
import styles from './TodoItme.module.css'
export default function TodoItem({item,todos,setTodos}){
    function handleDelete(item)
    {
        console.log("delete item is ",item)
        setTodos(todos.filter((todo)=> todo!==item))
    }
    function handleclike(name)
    {
        setTodos(todos.map((todo)=>todo.name===name?{...todo,done:!todo.done}:todo)) 

    }
    const className = item.done ? styles.completed: "";
    return <div className={styles.item} >
        <div className={styles.itemname}>
            <span className={className} onClick={()=>handleclike(item.name)}>{item.name}</span>  
        <span>
            <button onClick={()=>handleDelete(item)} className={styles.deletebutten}>X</button>
        </span>
        </div>
        <hr className={styles.line}/>
    </div>
}