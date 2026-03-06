import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import PlayLocaly from './pages/Game/playLocaly'
import MainLayout from './pages/mainLayout'
import "./app.css"
function App() {

  return (
    <Router>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/playLocaly" element={<PlayLocaly/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/"></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
