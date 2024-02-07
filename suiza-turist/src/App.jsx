import './app.scss'
import { About } from './components/about/About'
import { Extra } from './components/extra-info/Extra'
import { Footer } from './components/footer/Footer'
import { Places } from './components/places/Places'
import { Portrait } from './components/portrait/Portrait'

function App() {
  return (
    <div>
      <section><Portrait /></section>
      <section><About /></section>
      <section><Places /></section>
      <section><Extra /></section>
      <Footer />
    </div>
  )
}

export default App
