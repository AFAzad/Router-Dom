// import logo from './logo.svg';
import { BrowserRouter,Routes,Route , Navigate} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import User from './components/User';
// import Error from './components/Error';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='user/:name' element={<User/>}></Route>
        {/* <Route path='/*' element={<Error/>}></Route> */}
        <Route path='/*' element={<Navigate to="/"/>}>Error</Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
