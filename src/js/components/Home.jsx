import React, { useState } from "react";
import { Todo } from "./Todo";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("")
	const [todos, setTodos] = useState([])
	
	const handleInputChange = (event) => {
		if(event.key === "Enter") {
			addTodo();
		}
	}
	const addTodo = () => {
		if(inputValue.length > 0){
			setTodos([...todos, inputValue])
			setInputValue("")
		}
	}
	return (
		<div className="w-50 m-auto">
			<h1 className="text-center mt-5">To Do List!</h1>
			<div className="d-flex justify-content-center">
				<input type = "text" className="me-2 rounded-3" value = {inputValue} onChange={(event) => setInputValue(event.target.value)} onKeyDown={handleInputChange}/>
				<button type="button" className="btn btn-primary" onClick={() => addTodo()} >Add Task</button>
			</div>
			<div className="">
			{todos.map((todoValue,index) => (
					<Todo todoValue={todoValue} setTodos = {setTodos} index={index} key={index} todos={todos}/>
				))}
			</div>
			<div className="bg-primary-subtle row py-2 rounded-3">
				<p className="text-end mb-0">{ todos.length === 1 ? `${todos.length} item left!` : `${todos.length} items left!` }</p>
			</div>
			<div className="mt-5 text-center">
				<p>Made by <strong className="text-danger">love</strong> by JBeanCode</p>
			</div>
		</div>
	);
};

export default Home;