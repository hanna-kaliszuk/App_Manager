import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import Welcome from './pages/Welcome'
import Jobs from './pages/Jobs'
import Studies from './pages/Studies'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/studies" element={<Studies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App