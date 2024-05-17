import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/02home/home';
import NavBar from './components/01navBar/navBar';
import Footer from './components/03fotter/footer';
import Dashboard from './pages/dashboard';
import DashboardName from './pages/dashboardName';
import FormCorte from './pages/formCorte';
import FormName from './pages/formName';


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <NavBar/>
      <Routes>
              <Route path='/' element={<Home/>} ></Route>
              <Route path='/FormHaircut' element={<FormCorte/>} ></Route>
              <Route path='/MainDashboard' element={<Dashboard/>} ></Route>
              <Route path='/FormName' element={<FormName/>} ></Route>
              <Route path='/NamesVip' element={<DashboardName/>} ></Route>
            
      </Routes>
   
    </>
  )
}

export default App
