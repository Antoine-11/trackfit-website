import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import Classes from "../pages/Classes";
import Trainings from "../pages/Trainings";
import Contact from "../pages/Contact";
import Auth from "../pages/Auth";
import ThanksForm from "../pages/ThanksForm";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/trainings" element={<Trainings />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/thanksform" element={<ThanksForm />} />
    </Routes>
  );
}
