import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateUserPage from './pages/CreateUserPage';
//import './App.css';
//import { Link } from 'react-router-dom'



 function App() {
  
  return (
<Router>
  <main>
      <Routes>
          <Route path="/create-user" element={<CreateUserPage />} />
          </Routes>
       </main>
</Router>
    
  
  );
}

export default App;

