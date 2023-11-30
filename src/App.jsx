import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail'
import About from './pages/About/About'
import Error from './pages/Error/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './global.scss'


function App() {
  return(
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/appart/:id' element= {<Detail/>}/>
        <Route path='/about' element= {<About/>}/>
        <Route path='/*' element= {<Error/>}/>
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App
