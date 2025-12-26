import { useEffect, useState } from "react";
// import './App.css'
import HomePage from "./pages/HomePage";
import EligibilityPage from "./pages/EligibilityPage";
import { Routes, Route } from "react-router-dom"; 

function App() {
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:5000/")
  //     .then(res => res.text())
  //     .then(data => setMessage(data));
  // }, []);

  // return (
  //   <div>
  //     <h1>SchemeGuide</h1>
  //     <p>{message}</p>
  //     <button>Check Eligibility</button>
  //   </div>
  // );
  return (
  // <HomePage message={message} />
    //  <HomePage /> 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/check-eligibility" element={<EligibilityPage />} />
    </Routes>
  );
}

export default App;