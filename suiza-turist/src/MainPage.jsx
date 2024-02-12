import './app.scss'
import { About } from './components/about/About'
import { Portrait } from './components/portrait/Portrait'
import { Places } from './components/places/Places'
import { Title } from './components/extra-info/extra/Title'


export const MainPage = () => {
  return (
      <div>
        <section><Portrait /></section>
        <section><About /></section>
        <section><Title /></section>
        <section><Places /></section>
      </div>
  )
}

