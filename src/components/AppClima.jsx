import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/UseClima"
import Spinner from "./Spinner"

const AppClima = () => {

  const { resultado, cargando, noResultado } = useClima()

  return (
    <>
        <main className="dos-columnas">
            <Formulario />

            { cargando 
            ? <Spinner /> 
            : resultado?.name && <Resultado /> 
            ? <Resultado />
            : noResultado 
            ? <p>{noResultado}</p>
            : <p>El clima se va a mostrar aquí</p>}
        </main>
    </>
  )
}

export default AppClima