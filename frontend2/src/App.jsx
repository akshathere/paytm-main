
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Routes/signup";
import { Signin } from "./Routes/signin";
import { Dashboard } from "./Routes/dashboard";
import { SendMoney } from "./Routes/SendMoney";
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/send" element={<SendMoney/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
