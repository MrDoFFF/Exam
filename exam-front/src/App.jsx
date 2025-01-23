import './App.css'
import MainLayouts from "./Layout/MainLayouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Basket from './Pages/Basket';
import Wishlist from './Pages/Wishlist';
import Details from './Pages/Details';
import AddPage from './Pages/AddPage';
import AdminLayouts from './Layout/AdminLAyouts';
import AdminTable from './Pages/AdminTable';
import NotFoundPage from './Pages/NotFoundPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route index element={<Home />} />
            <Route path="basket" element={<Basket />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="details" element={<Details />} />
            </Route>
            <Route path='adminpage'element={<AdminLayouts/>}>
              <Route index element={<AdminTable/>}></Route>
              <Route path='addpages' element={<AddPage/>}></Route>
            </Route>
            <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
