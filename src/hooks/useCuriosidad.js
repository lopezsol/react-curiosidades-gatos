import { useEffect, useState } from "react"
import { obtenerCuriosidad } from "../services/curiosidad"


export function useCuriosidad() {
    const [curiosidad, setCuriosidad] = useState()
    const refrescarCuriosidad = () => {
        obtenerCuriosidad().then(newFact => setCuriosidad(newFact))
    }
    useEffect(refrescarCuriosidad, [])
    return { curiosidad, refrescarCuriosidad }
}

