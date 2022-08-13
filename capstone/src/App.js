import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/dashboard/welcome";
import SignIn from "./components/pages/authentication/signIn";
import Signup from "./components/pages/authentication/signUp";
import Pagenotfound from "./components/pages/notfound/pageNotFound";
import Footer from "./layout/footer";
import Navbar from "./layout/navbar";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}
