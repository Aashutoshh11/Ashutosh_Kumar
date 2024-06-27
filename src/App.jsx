// import logo from './logo.svg';
// import './App.css';
import Home from './Componentt/Home';
import Sidebar from './Componentt/Sidebar';
import Search from './Componentt/Search';
import Addmovie from './Componentt/Addmovie';
import Profile from './Componentt/Profile';
import Description from './Componentt/Description';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Update from './Componentt/Update';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
    <Sidebar></Sidebar>
    <Routes>
          

          <Route path='/' element={<Home></Home>}/>
          <Route path='/search' element={<Search></Search>}/>
          <Route path='/add' element={<Addmovie></Addmovie>}/>
          <Route path='/profile' element={<Profile></Profile>}/>
          <Route path='/description/:id' 
          element={<Description/>}/>
          <Route path='/Update/:id' element={<Update/>}/>
          
          
          
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
