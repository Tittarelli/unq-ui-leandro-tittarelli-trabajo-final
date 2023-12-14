import './App.css'
import { PlayerSection } from './components/playerSection'

function App() {
  return (
    <main>
      <section className='header'>
        <h1>Batalla Naval</h1>
      </section>
      <section className='game'>
        <PlayerSection player={"Jugador 1"} />
        <PlayerSection player={"CPU"} />
      </section>
      <footer>
        <p>Desarrollado por <a href='https://github.com/Tittarelli'>Leandro Tittarelli</a> en 2023 para la materia Construcción de Interfaces de Usuario de la UNQ</p>
      </footer>
    </main>
  )
}

export default App
