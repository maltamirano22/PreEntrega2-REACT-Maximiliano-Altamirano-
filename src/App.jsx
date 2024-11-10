import NavBar from "./components/NavBar"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App() {
  return (
  <BrowserRouter>
      <NavBar/> 
        <Routes>
          <Route path="/products" element={<ItemListContainer  greetings={"Bienvenidos a Cake Shop & More"}/>} />
          <Route path="/" element={<ItemListContainer  greetings={"Bienvenidos a Cake Shop & More"}/>} />
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        </Routes>
  </BrowserRouter>

  );
}

export default App
