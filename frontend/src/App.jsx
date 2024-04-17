import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import Home from "./pages/components/Home";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        {token && (
          <Route path="/home" element={<Home />} />
        )}
        <Route path="*" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
