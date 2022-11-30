import './App.css';
import './styles/style.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
