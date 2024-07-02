import { useState } from "react"
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";
export default function Todo(){
    const [todos,setTodos]=useState([]);
    const completTodos=todos.filter((todo)=>todo.done).length
    const totalTodos=todos.length
    return <div>
            <Form todos={todos} setTodos={setTodos}/>   
            <TodoList todos={todos} setTodos={setTodos} />
            <Footer completTodos={completTodos} totalTodos={totalTodos}/>
    </div>
}