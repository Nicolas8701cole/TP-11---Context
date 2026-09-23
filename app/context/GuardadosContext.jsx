import { createContext, useState } from "react"
export const GuardadosContext = createContext()

export function GuardadosProvider({ children }) {//children es el contenido del prop
    const [guardados, setGuardados] = useState([])

    function estaGuardado(idPosteo) { //Corroboro si id existe
        return guardados.includes(idPosteo)
    }

    function CambiarGuardado(idPosteo) {
        if (guardados.includes(idPosteo)) {
            //filter era clonar solo que lo hacemos sin el id
            const nuevosGuardados = guardados.filter(function (id) {
                return id != idPosteo
            })
            setGuardados(nuevosGuardados)
        }
        else {
            //concat lo suma al final
            const nuevosGuardados = guardados.concat(idPosteo)
            setGuardados(nuevosGuardados)
        }
    }
    return (
        <GuardadosContext.Provider
            value={{
                guardados,
                estaGuardado,
                CambiarGuardado
            }}
        >
            {children}
        </GuardadosContext.Provider>
    )
}