import{BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Services from "./pages/Services";
import LoginPage from "./pages/LoginPage";
import DoctorRegi from "./pages/DoctorRegi";
import {  useSelector } from "react-redux";
import Spinner from "./components/Spinner";


function App() {
  const{loading} =useSelector (state =>state.alerts)
  return (
    <>
  <BrowserRouter>
  {loading &&<Spinner/>}
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/doctorregi' element={<DoctorRegi/>}/>
    <Route path='/loginpage' element={<LoginPage/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
