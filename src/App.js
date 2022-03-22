import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './component/Home/Home'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import NotFound from './component/NotFound/NotFound'
import Navigation from './component/Navigation/Navigation';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './component/privateRoute/PrivateRoute';
import DocAppoinment from './component/DocAppoinment/DocAppoinment';
import PostTest from './component/PostTest/PostTest';
import Doctors from './component/Doctors/Doctors';
import Tests from './component/Test/Tests';
import Dashboard from './component/dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointment/:id" element={<PrivateRoute> <DocAppoinment/> </PrivateRoute>} />
          <Route path="/test/:id" element={<PrivateRoute> <PostTest /> </PrivateRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
