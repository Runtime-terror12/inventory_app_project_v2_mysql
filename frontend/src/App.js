import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import NavBar from "./components/NavBar/NavBar";
import ProductPage from "./pages/productPage";
import EditProduct from "./pages/UpdateProduct";
import User from "./pages/User/User";
import UpdateUser from "./pages/UpdateUser/UpdateUser";
<<<<<<< HEAD
import Footer from "./components/Footer";
import CreateProduct from './pages/CreateProduct';
import NotFound from './pages/404';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import CreateUserPage from './pages/CreateUserPage';


=======
import Footer from "./components/Footer/Footer";
import CreateProduct from "./pages/CreateProduct";
import NotFound from "./pages/404";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import CreateUserPage from "./pages/CreateUserPage";
>>>>>>> 32acdda1f39c9b7358d327f6cbf87f5447aad3b6

//import UserPage from './pages/UserPage';
//import './App.css';
//import { Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/update-user/:id" element={<UpdateUser />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
