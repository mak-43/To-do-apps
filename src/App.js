import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import AddTask from './Components/ToDo/AddTask/AddTask';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Registered/Register';
import RequireAuth from './Components/Pages/RequireAuth/RequireAuth';
function App() {
  return (
    <div className="App">
      
      <Header/>
     <Routes>
      <Route path='/' element={<RequireAuth>
         <AddTask/>
      </RequireAuth>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
     </Routes>
    <Footer/>
    <ToastContainer />
    </div>
  );
}

export default App;
