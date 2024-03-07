import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home"
import { Setting } from "../pages/Setting";
import  Consultation  from "../pages/Home/components/Consultation";
import  NewConsultation from "../pages/Home/components/NewConsultation"
import PageHome from "../pages/Home/components/pageHome";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/pageHome" element={<PageHome/>} />
        <Route path="/consultation" element={<Consultation/>} />
        <Route path="/newconsultation" element={<NewConsultation/>} />
        <Route path="/setting" element={<Setting/>} />
      </Routes>
    </BrowserRouter>
  );
}