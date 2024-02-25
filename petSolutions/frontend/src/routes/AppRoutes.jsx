import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home"
import Setting from "../pages/Setting";


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/setting" element={<Setting/>} />
      </Routes>
    </BrowserRouter>
  );
}