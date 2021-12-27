import React from 'react'
import './TodoItem.css'

function TodoItem(props) {
    return (
        <div className='TodoItem'>
            <input type="checkbox" />
            <p>{props.text}</p>
            <button className='removeItemButton'>x</button>
        </div>
    )
}

export default TodoItem
