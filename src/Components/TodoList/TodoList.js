import React from 'react'

import './TodoList.css'

function TodoList(props) {
    return (
        <section className='todoList'>
            <div className='todoList__container'>
                {props.children}
            </div>
        </section>
    )
}

export default TodoList
