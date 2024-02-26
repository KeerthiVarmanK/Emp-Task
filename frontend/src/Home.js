import React, { useState } from "react";
import axios from "axios";
import{toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./Style.css";

const Home = () => {
  const initialFormData = {
    id: "",
    name: "",
    department: "",
    designation: "",
    gender: "",
    salary: "",
    email: "",
    Age: "",
    bloodgroup: "",
    native: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = (e) => {
    const requiredFields = [
      "id",
      "name",
      "department",
      "dob",
      "gender",
      "designation",
      "salary",
    ];
    setCurrentStep(currentStep + 1);
    /*const filledFields = requiredFields.every(
      (field) => formData[field] !== ""
    );
    if (filledFields) {
      
    } else {
      toast.error("Please fill in all fields before proceeding.");
    }*/
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      axios.post("https://emp-task-9.onrender.com/submit-form", formData);
      toast.success("Employee data submitted successfully!");
    } catch (error) {
      console.error("Error:", error.response.data);
      toast.error("Error occurred while submitting data");
    }
  };

  const handleClear = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <label>
              Employee ID:
              <input
                type="number"
                name="id"
                placeholder="Enter Employee id:"
                value={formData.id}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>
            <label>
              Employee Name:
              <input
                type="text"
                name="name"
                placeholder="Enter Employee Name"
                value={formData.name}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>
            <label>
              Department:
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="Cse">CSE</option>
                <option value="AIDS">AIDS</option>
                <option value="ECE">ECE</option>
                <option value="Mechanical">Mechanical</option>
              </select>
            </label>
            <label className="radio-label">
              Gender:
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  className="radio-input"
                  required
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  className="radio-input"
                  required
                />
                Female
              </label>
            </label>
            <label>
              Designation:
              <input
                type="text"
                name="designation"
                placeholder="Enter Employee Designation"
                value={formData.designation}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>
            <label>
              Salary:
              <input
                type="number"
                name="salary"
                placeholder="Enter Employee Salary"
                value={formData.salary}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>
            <button type="button" className="next-button" onClick={handleNext}>
              Next
            </button>
          </>
        );
      case 2:
        return (
          <>
            <label>
              Email:
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="Age"
                placeholder="Enter Age"
                value={formData.Age}
                onChange={handleChange}
                className="input-field"
                required
              />
            </label>
            <label>
              Blood Group:
              <select
                name="bloodgroup"
                value={formData.bloodgroup}
                onChange={handleChange}
                className="input-field"
                required
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </label>
 
  

            <button type="submit" className="submit-button">
              Submit
            </button>
            <button
              type="button"
              className="clear-button"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              type="button"
              className="prev-button"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              Previous
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="fancy">Employee Details </h1>
      <form className="employee-form" onSubmit={handleSubmit}>
        {renderFormStep()}
      </form>
    </div>
  );
};

export default Home;
