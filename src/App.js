
import './App.css';
import Header from './Components/Header';
import Login from './Components/Home/Login';
import Register from './Components/Home/Register';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';




 function App() {
  return(
    <Router>
   <div id='main'>

    
<Routes>
<Route exact path='/' element={< Header />}></Route>
<Route exact path='/login' element={< Login />}></Route>
<Route exact path='/Register' element={< Register />}></Route>
</Routes>
   </div>
   
   </Router>
  );
}
export default App;



