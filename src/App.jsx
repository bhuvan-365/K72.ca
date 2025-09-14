import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import LenisProvider from "./components/smoothscroll/LenisProvider";
import TopProgressBar from "./components/smoothscroll/TopProgressBar";
import VerticalSectionLine from "./components/smoothscroll/VerticalSectionLine";


const App = () => {
  return (
    <LenisProvider>
      <div className='overflow-x-hidden'>
        <Navbar />
        <FullScreenNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/agence' element={<Agence />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
    </LenisProvider>
  )
}

export default App