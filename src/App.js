import LandingPage from "./components/home/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Jobs from "./components/job/Jobs";
import {Routes,Route} from 'react-router-dom'
import JobPost from "./components/job/JobPost";

function App() {
  return (
    <Routes>
      <Route path="/job" element={<Jobs />} />
      <Route path="/header" element={<JobPost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<LandingPage />} />
     
    </Routes>
  );
}

export default App;
