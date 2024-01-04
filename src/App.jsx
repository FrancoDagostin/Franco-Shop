import './main.css'
import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Item from './componentes/Item'
import Nosotros from './componentes/Nosotros'
import Contacto from './componentes/Contacto'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/productos' element={<ItemListContainer />} />
          <Route path='/productos/:categoria' element={<ItemListContainer />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
