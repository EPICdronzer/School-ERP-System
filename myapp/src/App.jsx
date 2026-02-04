import './App.css'
import {BrowserRouter, Route, Routes} from "react-router"
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Home" element={<Dashboard/>}/>
          <Route path="*" element="Error Wrong URL"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
