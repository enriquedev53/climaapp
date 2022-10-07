import { useContext } from "react";
import ClimaContext from "./ClimaProvider";

const useClima = () => {
    return useContext(ClimaContext)
}

export default useClima