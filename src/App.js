import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import AddTask from './Components/ToDo/AddTask/AddTask';

function App() {
  return (
    <div className="App">
      
      <Header/>
     <Routes>
      <Route path='/' element={<AddTask/>}></Route>
     </Routes>
    <Footer/>
    </div>
  );
}

export default App;
