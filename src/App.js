import LandingPage from "./components/home/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Jobs from "./components/job/Jobs";
import {Routes,Route} from 'react-router-dom'
import JobPost from "./components/job/JobPost";
import MainHeader from "./components/job/MainHeader";

function App() {
  return (
    <Routes>
      <Route path="/job" element={<Jobs />} />
      <Route path="/header" element={<JobPost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainHeader/>} />
     
    </Routes>
  );
}

export default App;
