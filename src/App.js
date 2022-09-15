import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
//import Contacto from './components/Contacto'
//import Footer from './components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect( () => {
    Aos.init({
      duration: 2000
    })
  },[])
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      {/*<Contacto />
      <Footer />*/}
    </div>
  );
}

export default App;