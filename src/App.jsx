import './App.css'
import { useCuriosidad } from './hooks/useCuriosidad'
import { useImagenGato } from './hooks/useImagenGato'

function App() {
  const { curiosidad, refrescarCuriosidad } = useCuriosidad()
  const imagenGato = useImagenGato(curiosidad)

  const handleClick = async () => {
    refrescarCuriosidad()
  }

  return (
    <main>
      <h1>Curiosidades gatitos</h1>
      <button onClick={handleClick} >Nueva curiosidad</button>
      {curiosidad && <p>{curiosidad}</p>}
      {imagenGato && <img src={imagenGato} alt="" />}
    </main>
  )
}

export default App
