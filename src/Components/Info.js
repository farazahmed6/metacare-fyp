import React from "react";
import InformationCard from "./InformationCard";
import {
  faHeartPulse,
  faClinicMedical,
  faHandHoldingMedical,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>

        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="HealthConnect"
          description="Our Health service facilitates user requests for crucial healthcare equipment 
          such as mobility aids, monitoring devices, and specialized medical tools. AI assessment ensures 
          precise allocation, meeting individual needs. Users also connect with healthcare professionals for 
          expert advice, creating a supportive network for consultations. This comprehensive approach ensures 
          access to essential devices 
          while promoting overall well-being through expert guidance and support."
          icon={faClinicMedical}
        />

        <InformationCard
          title="Emergency Care"
          description="The Donations service on our Healthcare Assistance Platform allows users to
           request financial assistance for medical expenses and other healthcare needs. Utilizing AI-driven 
           assessments, we efficiently allocate donated funds to individuals who meet specific eligibility criteria. 
           This innovative approach ensures that each donation makes a targeted impact, 
           directly supporting those facing urgent healthcare challenges."
          icon={faHandHoldingMedical}
        />

        <InformationCard
          title="Donations"
          description="The Donations service on our Healthcare Assistance Platform empowers 
          users to seek financial aid for medical expenses and various healthcare needs. 
          Through an advanced AI-driven assessment, we prioritize efficient allocation of donated funds,
           ensuring they reach individuals who meet specific eligibility criteria.Your support makes a meaningful difference
          , fostering a healthier and more equitable future for all.."
          icon={faHeartPulse}
        />
      </div>
    </div>
  );
}

export default Info;
