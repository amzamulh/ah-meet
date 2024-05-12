import { Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Main from "./pages"
import Home from "./pages/Home"
import Upcoming from "./pages/Upcoming"
import Setting from "./pages/Setting"
import Previous from "./pages/Previous"
import Room from "./pages/Room"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} >
        <Route path="/" element={<Home/>}/>
        <Route path="/upcoming" element={<Upcoming/>}/>
        <Route path="/previous" element={<Previous/>}/>
        <Route path="/setting" element={<Setting/>}/>
      </Route>
      <Route path="/room/:roomId" element={<Room/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  )
}

export default App
