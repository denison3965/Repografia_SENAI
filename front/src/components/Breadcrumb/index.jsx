import React from 'react'
import { useState } from 'react'

const breadcrumb = {
    backgroundColor: 'white',
    border: '1px solid rgba(0,0,0,0.125)',
    borderRadius: '0.37rem'
}

function Breadcrumb(props) {

    // function isLast(index) {
    //     return index === props.crumb.length -1
    // }
    const [dado, setDado] = useState(['Inicio', 'Registros'])

    return (
        <nav className="row justify-content-center mt-4">
            <ol className="breadcrumb" style={ breadcrumb }>
                {
                    dado.map((crumb, ci) => {
                        const disabled = isLast(ci) ? 'disabled' : '';
                        
                        return (
                            <li
                                key={ ci }
                                className="breadcrumb-item align-items-center"
                            >
                                <button className={ `btn btn-link ${ disabled }`}  >
                                    { crumb }
                                </button>
                            </li>
                        )
                    }) 
                }

            </ol>

        </nav>
    )
}

export default Breadcrumb