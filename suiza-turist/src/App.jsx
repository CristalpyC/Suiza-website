import './app.scss'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Zurich } from './pages/zurich/zurich'
import { MainPage } from './MainPage'
import { Geneva } from './pages/geneva/Geneva'
import { Zermatt } from './pages/zermatt/Zermatt';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/zurich" element={<Zurich />}/>
          <Route path="/geneva" element={<Geneva />}/>
          <Route path="/zermatt" element={<Zermatt />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
