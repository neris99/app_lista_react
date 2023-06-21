import { HomePages } from "./pages/Home/HomePages";
import { HeaderPartial } from "./Partials/HeaderPartial/HeaderPartial";
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";
import { AppContext } from './store/AppContext'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <AppContext>
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
