import { useState } from "react";
import "./EligibilityPage.css";

function EligibilityPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [direction, setDirection] = useState("next");
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

                            <button onClick={nextStep} disabled={currentStep === totalSteps}>
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
                                            <input type="text" />
                                        </div>

                                        <div className="question">
                                            <label>Last Name</label>
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className="question">
                                        <label>Age</label>
                                        <input type="number" />
                                    </div>

                                    <div className="question">
                                        <label>Gender</label>
                                        <select>
                                            <option value="">Select</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="question">
                                        <label>State of Residence</label>
                                        <select>
                                            <option value="">Select state</option>
                                            <option>Maharashtra</option>
                                            <option>Gujarat</option>
                                            <option>Karnataka</option>
                                        </select>
                                    </div>

                                    <div className="question">
                                        <label>Area</label>
                                        <select>
                                            <option>Urban</option>
                                            <option>Rural</option>
                                        </select>
                                    </div>

                                    <div className="question">
                                        <label>Disability</label>
                                        <select>
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
                                        <select>
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
                                        <select>
                                            <option>Below ₹1 Lakh</option>
                                            <option>₹1 – 2.5 Lakh</option>
                                            <option>₹2.5 – 5 Lakh</option>
                                            <option>Above ₹5 Lakh</option>
                                        </select>
                                    </div>
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
