import useClima from "../hooks/UseClima"

const Resultado = () => {
    const { resultado } = useClima()
    
    const { name, main } = resultado

    console.log(resultado);
    
  return (
    <div className="contenedor clima">
        <h2>{name}</h2>
        <p>{parseInt(main.temp - 273.15)}<span>&#x2103;</span></p>
        <div className="temp_min_max">
            <p>Mínima: {parseInt(main.temp_min - 273.15)}<span>&#x2103;</span></p>
            <p>Máxima: {parseInt(main.temp_max - 273.15)}<span>&#x2103;</span></p>
        </div>
    </div>
  )
}

export default Resultado