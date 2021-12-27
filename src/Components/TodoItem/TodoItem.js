import React from 'react'
import './TodoItem.css'

function TodoItem(props) {
    return (
        <div className='TodoItem'>
            <div className='TodoItem--list'>
            <input type="checkbox" className='todoItemCheckBox' />
            <p>{props.text}</p>
            </div>
            <button className='removeItemButton'>x</button>
        </div>
    )
}

export default TodoItem
