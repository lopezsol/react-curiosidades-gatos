const URL_CURIOSIDAD = 'https://catfact.ninja/fact'

export const obtenerCuriosidad = () => {
    return fetch(URL_CURIOSIDAD)
        .then(res => res.json()) // cambiamos el formato a json
        .then(data => {
            const { fact } = data
            return fact
        })
}

/* export const obtenerCuriosidad = async () => {
    const res = await fetch(URL_CURIOSIDAD)
    const data = await res.json()
    const { fact } = data
    return fact
  } */