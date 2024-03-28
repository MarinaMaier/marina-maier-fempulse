import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Header} from "./components/Header/Header";
import { WelcomePage } from './pages/WelcomePage';
import { SignUpPage } from './pages/SignUpPage';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
