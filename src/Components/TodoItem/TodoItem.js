import React from 'react'

function TodoItem(props) {
    return (
        <li>
            <span>C</span>
            <p>{props.text}</p>
            <button>X</button>
        </li>
    )
}

export default TodoItem
