import React from "react";
import Container from "../UI/Container";
import Tabs from "../UI/Tabs";
import "./DoctorCardDetails.css";
const tabs = [
  {
    title: "Overview",
    content: [
      {
        title: "A little about me",
        description: [
          "A doctor specializing in brain and nerve diseases. Neurologist / for adults/ holds a Syrian Board Certificate in Neurology. Treatment of headache, migraine, epilepsy, convulsions, spine pain, multiple sclerosis, muscle weakness, strokes, tremor, memory loss, Parkinson's disease, as well as numbness and paresthesia of the extremities and neuropathy and muscles.",
        ],
      },
      {
        title: "Jobs I had",
        description: [
          "General Practitioner - Dent Polyclinic, 2018",
          "Medical Director - Dent Polyclinic, 2018",
          "General Practitioner - Simai Medical Center, 2015 - 2018",
          "Emergency Physician - Dallah Hospital, 2021 - Now",
        ],
      },
      {
        title: "I'm affiliated with",
        description: [
          "American Heart Association",
          "Saudi Heart Association SHA",
          "ACLS | Advanced Cardiac Life Support",
        ],
      },
    ],
  },
  {
    title: "Reviews",
    content: [
      {
        name: "Ahmed",
        rate: 5,
        time: "2 days",
        review:
          "Specialist in psychotherapy, psychotherapy, psychotherapy, psychotherapy, psychotherapy, psychotherapy, psychotherapy, social care, psychotherapy, psychological and international care, seeing a doctor or psychologist in the clinic",
      },
      {
        name: "Mohamed",
        rate: 4,
        time: "3 days",
        review:
          "Specialist in psychotherapy, psychotherapy, psychotherapy, psychotherapy, psychotherapy, psychotherapy, psychotherapy, social care, psychotherapy, psychological and international care, seeing a doctor or psychologist in the clinic",
      },
      {
        name: "Ali",
        rate: 3,
        time: "4 months",
        review:
          "Specialist in psychotherapy, psychotherapy, psychotherapy, psychotherapy, psychotherapy, psychotherapy, psychotherapy, social care, psychotherapy, psychological and international care, seeing a doctor or psychologist in the clinic",
      },
    ],
  },
];

const DoctorCardDetails = (props) => {
  return (
    <Container>
      <div className="doctor-card-details">
        <Tabs tabs={tabs} />
      </div>
    </Container>
  );
};

export default DoctorCardDetails;
