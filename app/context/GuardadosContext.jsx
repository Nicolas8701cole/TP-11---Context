import { createContext, useState } from "react"
export const GuardadosContext = createContext()

export function GuardadosContext({children}){//children es el contenido del prop
const [guardados, setGuardados] = useState([])
}
export function EstaGuardado ({idPosteo}){ //Corroboro si id existe
 return guardados.includes(idPosteo)
}

