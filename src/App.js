import React from "react";
import "./App.css";
import DoctorCard from "./DoctorCard/DoctorCard";
import DoctorCardDetails from "./DoctorCard/DoctorCardDetails";
import Header from "./Header/Header";
import Breadcrumbs from "./UI/Breadcrumbs";
import Modal from "./UI/Modal";

const items = [
  {
    title: "Doctors",
    link: "/doctors",
  },
  {
    title: "Dr. Abdulrahman Ali",
    link: "/doctors/1",
  },
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <Breadcrumbs items={items} />
      <DoctorCard />
      <DoctorCardDetails />
    </div>
  );
};

export default App;
