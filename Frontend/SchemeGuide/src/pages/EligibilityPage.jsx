import { useState } from "react";
import "./EligibilityPage.css";

const categories = [
  { value: "Unemployed", icon: "🔍", label: "Unemployed" },
  { value: "Student", icon: "📚", label: "Student" },
  { value: "Working Professional", icon: "💼", label: "Working Professional" },
  { value: "Self Employed / Business", icon: "🏪", label: "Self Employed" },
  { value: "Farmer", icon: "🌾", label: "Farmer" },
  { value: "Senior Citizen", icon: "👴", label: "Senior Citizen" },
  { value: "Homemaker", icon: "🏠", label: "Homemaker" },
  { value: "Person with Disability", icon: "♿", label: "Person with Disability" },
];

const incomeRanges = [
  { value: "Below ₹1 Lakh", label: "Below ₹1 Lakh" },
  { value: "₹1 – 2.5 Lakh", label: "₹1 – 2.5 Lakh" },
  { value: "₹2.5 – 5 Lakh", label: "₹2.5 – 5 Lakh" },
  { value: "Above ₹5 Lakh", label: "Above ₹5 Lakh" },
];

const stepInfo = [
  { title: "Basic Details", description: "Tell us about yourself" },
  { title: "Your Category", description: "Select your occupation" },
  { title: "Income Details", description: "Your annual income range" },
];

function EligibilityPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState("next");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    state: "",
    area: "",
    disability: "No",
    category: "",
    income: "",
  });

  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setDirection("next");
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setDirection("prev");
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const formattedData = {
        ...formData,
        age: Number(formData.age),
        income:
          formData.income === "Below ₹1 Lakh"
            ? 100000
            : formData.income === "₹1 – 2.5 Lakh"
            ? 250000
            : formData.income === "₹2.5 – 5 Lakh"
            ? 500000
            : 1000000,
        category: formData.category.toUpperCase(),
      };

      console.log("Sending to backend:", formattedData);

      const res = await fetch("http://localhost:5000/api/eligibility", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      const data = await res.json();
      console.log("Response from backend:", data);
    } catch (error) {
      console.error("Submit error:", error);
    }
  };

  return (
    <div className="eligibility-wrapper">
      <div className="eligibility-page">
        <div className="eligibility-card">
          <div className="card-layout">
            {/* LEFT PANEL */}
            <div className="left-panel">
              <div className="progress-section">
                <h3>Step {currentStep}</h3>
                <p className="step-label">{stepInfo[currentStep - 1].title}</p>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
                <p className="levels-left">
                  {totalSteps - currentStep === 0
                    ? "Final step!"
                    : `${totalSteps - currentStep} step${totalSteps - currentStep > 1 ? "s" : ""} remaining`}
                </p>

                {/* Step Indicators */}
                <div className="step-indicators">
                  {stepInfo.map((step, index) => (
                    <div
                      key={index}
                      className={`step-indicator ${
                        currentStep === index + 1
                          ? "active"
                          : currentStep > index + 1
                          ? "completed"
                          : ""
                      }`}
                    >
                      <span className="step-number">
                        {currentStep > index + 1 ? "✓" : index + 1}
                      </span>
                      <span>{step.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="nav-buttons">
                <button
                  className="nav-btn secondary"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  ← Previous
                </button>
                {currentStep < totalSteps ? (
                  <button className="nav-btn primary" onClick={nextStep}>
                    Next →
                  </button>
                ) : null}
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="right-panel">
              <div key={currentStep} className={`step-content ${direction}`}>
                <div className="step-header">
                  <h2>{stepInfo[currentStep - 1].title}</h2>
                  <p>{stepInfo[currentStep - 1].description}</p>
                </div>

                {/* STEP 1: Basic Details */}
                {currentStep === 1 && (
                  <>
                    <div className="form-row">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Age</label>
                        <input
                          type="number"
                          placeholder="Enter your age"
                          value={formData.age}
                          onChange={(e) =>
                            setFormData({ ...formData, age: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label>Gender</label>
                        <select
                          value={formData.gender}
                          onChange={(e) =>
                            setFormData({ ...formData, gender: e.target.value })
                          }
                        >
                          <option value="">Select gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>State of Residence</label>
                        <select
                          value={formData.state}
                          onChange={(e) =>
                            setFormData({ ...formData, state: e.target.value })
                          }
                        >
                          <option value="">Select state</option>
                          <option>Maharashtra</option>
                          <option>Gujarat</option>
                          <option>Karnataka</option>
                          <option>Tamil Nadu</option>
                          <option>Kerala</option>
                          <option>Delhi</option>
                          <option>Uttar Pradesh</option>
                          <option>Rajasthan</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Area</label>
                        <select
                          value={formData.area}
                          onChange={(e) =>
                            setFormData({ ...formData, area: e.target.value })
                          }
                        >
                          <option value="">Select area</option>
                          <option>Urban</option>
                          <option>Rural</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Do you have a disability?</label>
                      <select
                        value={formData.disability}
                        onChange={(e) =>
                          setFormData({ ...formData, disability: e.target.value })
                        }
                      >
                        <option>No</option>
                        <option>Yes</option>
                      </select>
                    </div>
                  </>
                )}

                {/* STEP 2: Category */}
                {currentStep === 2 && (
                  <>
                    <p className="step-description">
                      Select the category that best describes you:
                    </p>
                    <div className="category-grid">
                      {categories.map((cat) => (
                        <div
                          key={cat.value}
                          className={`category-card ${
                            formData.category === cat.value ? "selected" : ""
                          }`}
                          onClick={() =>
                            setFormData({ ...formData, category: cat.value })
                          }
                        >
                          <div className="icon">{cat.icon}</div>
                          <div className="label">{cat.label}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* STEP 3: Income */}
                {currentStep === 3 && (
                  <>
                    <p className="step-description">
                      Select your annual household income range:
                    </p>
                    <div className="income-grid">
                      {incomeRanges.map((range) => (
                        <div
                          key={range.value}
                          className={`income-card ${
                            formData.income === range.value ? "selected" : ""
                          }`}
                          onClick={() =>
                            setFormData({ ...formData, income: range.value })
                          }
                        >
                          <div className="amount">{range.label}</div>
                        </div>
                      ))}
                    </div>
                    <button className="submit-btn" onClick={handleSubmit}>
                      Find Eligible Schemes
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EligibilityPage;
