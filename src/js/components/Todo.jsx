import React, {useState} from "react";

export const Todo = ({todoValue, setTodos, todos, index}) => {
    
    const deleteTodos = () => {
        console.log("todo to be deleted: ", index)
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    return (
        <div className="d-flex">
            <div>
                <h2>{todoValue}</h2>
            </div>
            <div className="col-3">
                <button type="button" className="btn btn-danger" onClick={() => deleteTodos()} >X</button>
            </div>
        </div>
    )
}
