import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "../Styles/Donation.css";

export default function DonationForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // State variables for capturing user input
  const [fullName, setFullName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [cnicNumber, setCnicNumber] = useState("");
  const [address, setAddress] = useState("");
  const [numFamilyMembers, setNumFamilyMembers] = useState("");
  const [agesFamilyMembers, setAgesFamilyMembers] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [sourceIncome, setSourceIncome] = useState("");
  const [debtsLiabilities, setDebtsLiabilities] = useState("");
  const [assistanceNeeded, setAssistanceNeeded] = useState("");
  const [emergencyDetails, setEmergencyDetails] = useState("");
  const [cnicCopies, setCnicCopies] = useState("");
  const [proofResidence, setProofResidence] = useState("");
  const [proofIncome, setProofIncome] = useState("");
  const [medicalReports, setMedicalReports] = useState("");
  const [schoolCertificates, setSchoolCertificates] = useState("");
  const [references, setReferences] = useState("");
  const [consent, setConsent] = useState(false);
  const [followUp, setFollowUp] = useState(false);
  const [socialMediaLinks, setSocialMediaLinks] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };

  return (
    <div className="donation-form">
      <form onSubmit={handleSubmit}>
        {/* Personal Info */}
        <label htmlFor="full_name">Full Name:</label>
        <input
          type="text"
          id="full_name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label htmlFor="father_name">Father's Name:</label>
        <input
          type="text"
          id="father_name"
          value={fatherName}
          onChange={(e) => setFatherName(e.target.value)}
        />

        <label htmlFor="cnic_number">CNIC Number:</label>
        <input
          type="text"
          id="cnic_number"
          value={cnicNumber}
          onChange={(e) => setCnicNumber(e.target.value)}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        {/* Family Details */}
        <label htmlFor="num_family_members">Number of Family Members:</label>
        <input
          type="text"
          id="num_family_members"
          value={numFamilyMembers}
          onChange={(e) => setNumFamilyMembers(e.target.value)}
        />

        <label htmlFor="ages_family_members">Ages of Family Members:</label>
        <input
          type="text"
          id="ages_family_members"
          value={agesFamilyMembers}
          onChange={(e) => setAgesFamilyMembers(e.target.value)}
        />

        <label htmlFor="employment_status">Employment Status:</label>
        <input
          type="text"
          id="employment_status"
          value={employmentStatus}
          onChange={(e) => setEmploymentStatus(e.target.value)}
        />

        {/* Financial Situation */}
        <label htmlFor="monthly_income">Monthly Income:</label>
        <input
          type="text"
          id="monthly_income"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(e.target.value)}
        />

        <label htmlFor="source_income">Source of Income:</label>
        <input
          type="text"
          id="source_income"
          value={sourceIncome}
          onChange={(e) => setSourceIncome(e.target.value)}
        />

        <label htmlFor="debts_liabilities">
          Outstanding Debts or Financial Liabilities:
        </label>
        <input
          type="text"
          id="debts_liabilities"
          value={debtsLiabilities}
          onChange={(e) => setDebtsLiabilities(e.target.value)}
        />

        {/* Specific Needs */}
        <label htmlFor="assistance_needed">Nature of Assistance Needed:</label>
        <input
          type="text"
          id="assistance_needed"
          value={assistanceNeeded}
          onChange={(e) => setAssistanceNeeded(e.target.value)}
        />

        <label htmlFor="emergency_details">Emergency Details:</label>
        <input
          type="text"
          id="emergency_details"
          value={emergencyDetails}
          onChange={(e) => setEmergencyDetails(e.target.value)}
        />

        {/* Documentation */}
        <label htmlFor="cnic_copies">CNIC Copies:</label>
        <input
          type="file"
          id="cnic_copies"
          onChange={(e) => setCnicCopies(e.target.files[0])}
        />

        <label htmlFor="proof_residence">Proof of Residence:</label>
        <input
          type="file"
          id="proof_residence"
          onChange={(e) => setProofResidence(e.target.files[0])}
        />

        {/* Continue adding labels and input fields for other sections similarly */}

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
