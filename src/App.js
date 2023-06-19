import { HomePages } from "./pages/Home/HomePages";
import { HeaderPartial } from "./Partials/HeaderPartial/HeaderPartial";
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <HeaderPartial />
      <Routes>
        <Route  path='/' element={<HomePages />}/>
        <Route  path='/minhas-pastas' element={<MinhasPastasPage />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
