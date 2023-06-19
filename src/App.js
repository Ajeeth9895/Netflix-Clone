import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from './components/Login/Login';


function App() {

  //routing for login  and home page
  return <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />

          <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
      </BrowserRouter>
    </div>
  </>
}

export default App;
