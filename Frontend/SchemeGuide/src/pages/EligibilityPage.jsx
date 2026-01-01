import { useState } from "react";
import "./EligibilityPage.css";

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
        income: ""
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
            console.log("Sending to backend:", formData);

            const res = await fetch("http://localhost:5000/api/eligibility", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log("Response from backend:", data);
        } catch (error) {
            console.error("Submit error:", error);
        }
    };


    return (
        <div className="page">
            <div className="card">

                {/* CARD LAYOUT */}
                <div className="card-layout">

                    {/* LEFT COLUMN (placeholder for now) */}
                    <div className="left-panel">
                        <div className="progress-section">
                            <h3>Level {currentStep}</h3>

                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                                />
                            </div>

                            <p className="levels-left">
                                {totalSteps - currentStep} levels left
                            </p>
                        </div>


                        <div className="buttons">
                            <button onClick={prevStep} disabled={currentStep === 1}>
                                Previous
                            </button>

                            {/* <button onClick={nextStep} disabled={currentStep === totalSteps}>
                                Next
                            </button> */}
                            <button
                                onClick={() => {
                                    console.log(formData);
                                    nextStep();
                                }}
                            >
                                Next
                            </button>


                        </div>
                    </div>

                    {/* RIGHT COLUMN (your existing animated content) */}
                    <div className="right-panel">
                        <div key={currentStep} className={`step-content ${direction}`}>
                            <h2>Step {currentStep}</h2>
                            <p>This is content for step {currentStep}</p>

                            {/* LEVEL 1 */}
                            {currentStep === 1 && (
                                <>
                                    <h2>Basic Details</h2>

                                    <div className="row">
                                        <div className="question">
                                            <label>First Name</label>
                                            <input
                                                type="text"
                                                value={formData.firstName}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, firstName: e.target.value })
                                                }
                                            />

                                        </div>

                                        <div className="question">
                                            <label>Last Name</label>
                                            <input
                                                type="text"
                                                value={formData.lastName}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, lastName: e.target.value })
                                                }
                                            />


                                        </div>
                                    </div>

                                    <div className="question">
                                        <label>Age</label>
                                        <input
                                            type="number"
                                            value={formData.age}
                                            onChange={(e) =>
                                                setFormData({ ...formData, age: e.target.value })
                                            }
                                        />


                                    </div>

                                    <div className="question">
                                        <label>Gender</label>
                                        <select
                                            value={formData.gender}
                                            onChange={(e) =>
                                                setFormData({ ...formData, gender: e.target.value })
                                            }>
                                            <option value="">Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="question">
                                        <label>State of Residence</label>
                                        <select
                                            value={formData.state}
                                            onChange={(e) =>
                                                setFormData({ ...formData, state: e.target.value })
                                            }>
                                            <option value="">Select state</option>
                                            <option>Maharashtra</option>
                                            <option>Gujarat</option>
                                            <option>Karnataka</option>
                                        </select>
                                    </div>

                                    <div className="question">
                                        <label>Area</label>
                                        <select
                                            value={formData.area}
                                            onChange={(e) =>
                                                setFormData({ ...formData, area: e.target.value })
                                            }>
                                            <option value="">Select area</option>
                                            <option>Urban</option>
                                            <option>Rural</option>
                                        </select>
                                    </div>

                                    <div className="question">
                                        <label>Disability</label>
                                        <select
                                            value={formData.disability}
                                            onChange={(e) =>
                                                setFormData({ ...formData, disability: e.target.value })
                                            }>
                                            <option>No</option>
                                            <option>Yes</option>
                                        </select>
                                    </div>
                                </>
                            )}

                            {currentStep === 2 && (
                                <>
                                    <h2>Your Category</h2>

                                    <div className="question">
                                        <label>Select one option</label>
                                        <select
                                            value={formData.category}
                                            onChange={(e) =>
                                                setFormData({ ...formData, category: e.target.value })
                                            }
                                        >
                                            <option value="">Select category</option>
                                            <option>Unemployed</option>
                                            <option>Student</option>
                                            <option>Working Professional</option>
                                            <option>Self Employed / Business</option>
                                            <option>Farmer</option>
                                            <option>Senior Citizen</option>
                                            <option>Homemaker</option>
                                            <option>Person with Disability</option>
                                        </select>
                                    </div>
                                </>
                            )}

                            {currentStep === 3 && (
                                <>
                                    <h2>Income Details</h2>

                                    <div className="question">
                                        <label>Annual Income Range</label>
                                        <select
                                            value={formData.income}
                                            onChange={(e) =>
                                                setFormData({ ...formData, income: e.target.value })
                                            }
                                        >
                                            <option value="">Select income range</option>
                                            <option>Below ₹1 Lakh</option>
                                            <option>₹1 – 2.5 Lakh</option>
                                            <option>₹2.5 – 5 Lakh</option>
                                            <option>Above ₹5 Lakh</option>
                                        </select>
                                        

                                    </div>
                                    <button onClick={handleSubmit}>
                                            Submit
                                        </button>
                                </>
                            )}


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EligibilityPage;
