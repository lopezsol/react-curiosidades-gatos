import { useEffect, useState } from "react"
const URL_IMAGEN = 'https://cataas.com/cat/says/'

export function useImagenGato(curiosidad) {
    const [imagenGato, setImagenGato] = useState('')
    useEffect(() => {
        if(!curiosidad) return
        const tresPrimerasPalabras = (curiosidad).split(' ', 3).join(' ')        
        setImagenGato(tresPrimerasPalabras)
        
        //la API ya no devuelve la url, no se tiene que hacer mas el fetch
        // recuperar la imagen relacionada con las tres primeras palabras
        // const url_imagen_completa = `${URL_IMAGEN}${primeraPalabra}?json=true`
        // fetch(url_imagen_completa)
        //     .then(res => res.json())
        //     .then(response => {
        //         // setImagenGato(response)
        //     })
    }, [curiosidad])

    return imagenGato? `${URL_IMAGEN}${imagenGato}` : ''
}