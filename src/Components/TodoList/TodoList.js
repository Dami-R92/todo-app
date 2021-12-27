import React from 'react'

import './TodoList.css'

function TodoList(props) {
    return (
        <section className='todoList'>
            <div>
                {props.children}
            </div>
        </section>
    )
}

export default TodoList
