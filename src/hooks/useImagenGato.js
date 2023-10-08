import { useEffect, useState } from "react"
const URL_IMAGEN = 'https://cataas.com/cat/says/'
const URL_CATAAS = 'https://cataas.com/'

export function useImagenGato(curiosidad) {
    const [imagenGato, setImagenGato] = useState('')
    useEffect(() => {
        if(!curiosidad) return
        const primeraPalabra = (curiosidad).split(" ", 1)
        // recuperar la imagen relacionada con la primera palabra
        const url_imagen_completa = `${URL_IMAGEN}${primeraPalabra}?json=true`
        fetch(url_imagen_completa)
            .then(res => res.json())
            .then(response => {
                setImagenGato(response)
            })
    }, [curiosidad])

    return imagenGato? `${URL_CATAAS}${imagenGato.url}` : ''
}