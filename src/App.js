import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import { Register } from './Components/Register';
import ForgetPassword from './Components/ForgetPassword';
import WelcomeScreen from './Components/WelcomeScreen';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgetPassword" element={<ForgetPassword />} />
        <Route path='welcomeScreen' element={<WelcomeScreen />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
