import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({ todoValue, setTodos, todos, index, isPinned }) => {
  // add useState with "onHover" - as a terniary to text if user is hovering and if so, then use the button tag in line 20. Potentially
  // add functionality for edit ability for clicking within the text or div.
  const [divHover, setDivHover] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todoValue);
//  const [isPinned, setIsPinned] = useState(false);

  const deleteTodos = () => {
    console.log("todo to be deleted: ", index);
    if (!isPinned) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
      return;
    } window.alert("Cannot delete a pinned task!")
  };

  const editTodos = () => {
    const newTodos = [...todos];
    newTodos[index] = editValue;
    setTodos(newTodos);
    setIsEditing(false);
  };
  const invertPinned = () => {
    const newTodos = [...todos];
    newTodos[index].isPinned = !isPinned;
    setTodos(newTodos);
  }

  return (
    <div
      className="row border border-secondary py-2 my-1 rounded-3"
      onMouseEnter={() => setDivHover(true)}
      onMouseLeave={() => setDivHover(false)}
    >
      <div className={"col-1 d-flex rounded-3 align-items-center "}>
        {divHover || isPinned ? (
          <button
            type="button"
            className={"btn btn-outline-warning me-auto  "+ (isPinned ? " btn-warning" : "")}
            onClick={() => invertPinned()}
          >
            <FontAwesomeIcon icon={faThumbtack} className="text-dark" />
          </button>
        ) : null}
      </div>
      <div className="col-6">
        {/* If editing → show input */}
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={editValue}
            autoFocus
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={editTodos}
            onKeyDown={(e) => {
              if (e.key === "Enter") editTodos();
              if (e.key === "Escape") setIsEditing(false);
            }}
          />
        ) : (
          /* If not editing → show text */
          <h2 onClick={() => setIsEditing(true)} style={{ cursor: "pointer" }}>
            {todoValue}
          </h2>
        )}
      </div>
      <div className="col-3 d-flex rounded-3 align-items-center ">
        {divHover && (
          <button
            type="button"
            className="btn btn-danger ms-auto"
            onClick={deleteTodos}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
};
