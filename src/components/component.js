import React from 'react'
import '../styles/component-style.css'
function Testimonio(props){
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../images/testimonio-${props.imagen}.png`)} alt='Foto de persona'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testimonio'><strong>{props.cargo}</strong> en {props.empresa}</p>
                <p className='texto-testimonio'>"{props.testimonio}"</p>
            </div>
        </div>

    )
}
export default Testimonio