import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Category from './components/Category/Category'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Newsletter from './components/Footer/Newsletter/Newsletter'
import SingleProduct from './components/SingleProduct/SingleProduct'
import AboutPage from './components/About-us-page/Aboutpage'
function App() {
   
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/category/:id' element={<Category />}></Route>
          <Route path='/product/:id' element={<SingleProduct />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
        </Routes>
        <Newsletter/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
