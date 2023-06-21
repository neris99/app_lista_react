import { HomePages } from "./pages/Home/HomePages";
import { HeaderPartial } from "./Partials/HeaderPartial/HeaderPartial";
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { MinhasPastasPage } from "./pages/MinhasPastas/MinhasPastasPage";
import { savePinInFolder } from "./services/pinService";

function App() {
  //saveFolder('JavaScript')
  savePinInFolder('bbe3-12f17', 'pin123')
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
