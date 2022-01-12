import LandingPage from "./components/home/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<LandingPage />} />
     
    </Routes>
  );
}

export default App;
