import './app.scss'
import { About } from './components/about/About'
import { Portrait } from './components/portrait/Portrait'
import { Places } from './components/places/Places'
import { Title } from './components/extra-info/extra/Title'

function App() {
  return (
    <div>
      <section><Portrait /></section>
      <section><About /></section>
      <section><Title /></section>
      <section><Places /></section>
    </div>
  )
}

export default App
