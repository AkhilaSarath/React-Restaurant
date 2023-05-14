import logo from './logo.svg';
import Header from './Header';
import './App.css';
import Footer from './Footer';
import Restaurant from './Restaurant';
import { Route, Routes } from 'react-router-dom';
import Restview from './Restview';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Restaurant/>}></Route>
        <Route path='/viewRest/:id' element={<Restview></Restview>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
