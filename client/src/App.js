import logo from './logo.svg';
import './App.css';
import {Route ,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Folder/Home';
import Contact from './Folder/Contact';
import Service from './Folder/Service';
import About from './Folder/About';
import Signup from './Components/Signup';
function App() {
  return (
  
   <div className='App'>
    <Routes>
       <Route path='/' element={<Home/>}> </Route>
       <Route path='/about' element={<About/>}> </Route>
       <Route path='/contact' element={<Contact/>}> </Route>
       <Route path='/service' element={<Service/>}> </Route>
       <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
   
   </div>
   
  );
}

export default App;
