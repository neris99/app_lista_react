import { HomePages } from "./pages/Home/HomePages";
import { HeaderPartial } from "./Partials/HeaderPartial/HeaderPartial";
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";
import { AppContext } from './store/AppContext'

const inicialState = {
  activePin: null,
  mode: null,
  folders: [],
  type: null,
  pins: []
}



function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <AppContext inicialState={inicialState}>
    <HeaderPartial />
      <Routes>
        <Route  path='/' element={<HomePages />}/>
        <Route  path='/minhas-pastas' element={<MinhasPastasPage />}/>
      </Routes>
    </AppContext>
    </div>
    </BrowserRouter>
  )
}

export default App;
