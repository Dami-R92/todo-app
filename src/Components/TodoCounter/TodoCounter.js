import React from 'react'

import './TodoCounter.css'

const estilos =  {
    color: 'white',
}
function TodoCounter() {
    return (
        <h2 className='TodoCounter' style={estilos}>Has Completado 2 de 3 TODOs</h2>
    )
}

export default TodoCounter
