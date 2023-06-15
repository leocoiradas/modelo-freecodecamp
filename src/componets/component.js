import '../styles/component-styles.css'
function Testimonio(props){
    return(
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require(`../images/testimonio-{props.name}.png`)} alt='`Foto de ${props.name}`'/>
            <div className='contenedor-texto-testimonio'>
                <p><strong>{props.nombre}</strong> en {props.pais}</p>
                <p><strong>{props.cargo}</strong> en {props.empresa}</p>
                <p>{props.testimonio}</p>
            </div>
        </div>

    )
}
export default Testimonio