import HomePage from "./pages/HomePage";
import EligibilityPage from "./pages/EligibilityPage";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";



function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/check-eligibility" element={<EligibilityPage />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
