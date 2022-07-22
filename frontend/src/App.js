import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateUserPage from './pages/CreateUserPage';
import Nav from './components/NavBar/NavBar';
import UserPage from './pages/UserPage';

//import UserPage from './pages/UserPage';
//import './App.css';
//import { Link } from 'react-router-dom'



 function App() {
  
  return (
    <Router>
        <Nav />
       <main>
           <Routes>
              <Route path="/create-user" element={<CreateUserPage />} />
               <Route path="/" element={<UserPage />} />
          </Routes> 
        
          
       </main>
  </Router> 
    
  );
}

export default App;

