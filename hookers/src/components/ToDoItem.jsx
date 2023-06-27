import React from 'react'

function ToDoItem ({ todo, handleDelete }) {
  return (
    <li>
      {todo}
      <button onClick={handleDelete}>
        Eliminar
      </button>
    </li>
  )
}

export default ToDoItem
