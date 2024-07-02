import { useState } from "react"
import styles from './form.module.css'
export default function Form({todos,setTodos}){
    //const[todo,setTode]=useState("");
    const[todo,setTode]=useState({name:"",done:false});
    function handleSubmit(e)
    {
        e.preventDefault()
        setTodos([...todos,todo]);// settodos是异步方法 不会先执行 会跳到console.log()
        setTode({name:"",done:false})
    }
    return(
        <form className={styles.todoform}onSubmit={handleSubmit}>
        <div className={styles.inputcss}>
        <input  placeholder="Enter todo item.."className={styles.modernInput} value={todo.name} onChange={(e)=>{setTode({name:e.target.value,done:false})}} type="text"></input>
        <button className={styles.modernButton} type="submit">Add</button>
        </div>
        </form>
        )
}