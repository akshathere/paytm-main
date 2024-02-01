
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "../../frontend2/src/Routes/signup";
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/send" element={<Send/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App