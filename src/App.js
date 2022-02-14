// import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import TourDetails from './components/tourDetails/TourDetails'
import {Routes, Route} from 'react-router-dom';
import data from "./data/db.json";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/city/:id' element={<TourDetails tour={data} />}/>  
    </Routes>
    <Footer />
    </>
  );
}
export default App;
