import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import JobList from './pages/JobList/Job_List';
import JobDone from './pages/JobDone/Job_Done';
import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/LogIn';
function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className='root'>
      <BrowserRouter>
        <Routes>
          <Route path="/jobList" element={<JobList />} />
          <Route path="/jobDone" element={<JobDone />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
