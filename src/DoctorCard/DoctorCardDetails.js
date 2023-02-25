import React from "react";
import Container from "../UI/Container";
import Tabs from "../UI/Tabs";
import "./DoctorCardDetails.css";
const tabs = [
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
  {
    title: "Overview",
    content:
      "Specialist in psychotherapy, psychotherapy, psychotherapy, psychotherapy, psychotherapy, psychotherapy, psychotherapy, social care, psychotherapy, psychological and international care, seeing a doctor or psychologist in the clinic",
  },
  {
    title: "Contact",
    content: "Contact content",
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
