import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </>
);
};

export default App