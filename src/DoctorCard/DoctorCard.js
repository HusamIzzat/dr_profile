import React from "react";
import Card from "../UI/Card";
import styles from "./DoctorCard.module.css";
import { RxShare1 } from "react-icons/rx";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import DoctorImage from "../assets/doctor.png";
import StarsRating from "../UI/StarsRating";
import Tag from "../UI/Tag";
import DoctorKeySummary from "../UI/DoctorKeySummary";
import Button from "../UI/Button";
import Container from "../UI/Container";
const tag = [
  "Dentist",
  "Dermatologist",
  "General Practice",
  "Integrative Cardiology",
  "Dermatologist",
  "General Practice",
  "Holistic Preventive Medicine",
];
const DoctorKeys = [
  { location: "Saudi Arabia" },
  { language: "English , العربيه" },
  { time: "Accept new consultations (expect a response within 6 hours)" },
  { consultation: "108 Consultations" },
  { fees: "69 SAR Consultation fees" },
];
const DoctorCard = () => {
  return (
    <Container>
      <Card>
        <div className={styles["doctor-card"]}>
          <div className={styles["doctor-card__image"]}>
            <img src={DoctorImage} alt="doctor" />
          </div>
          <div className={styles["doctor-card__info"]}>
            <div className={styles["doctor-card__header"]}>
              {/* Header  */}
              <h2 className={styles["doctor-name"]}>
                <span>Dr. Abdulrahman Abdulrahman</span>
                <span>
                  Medical License No. <strong>11RM0046881</strong>{" "}
                </span>
              </h2>
              <div className={styles["doctor-card_header_actions"]}>
                <RxShare1 />
                <MdOutlineFavoriteBorder />
              </div>
            </div>
            <div className={styles["doctor-card__body"]}>
              {/* Body  */}
              <div className={styles["doctor-card_body_desc"]}>
                <p>General Practice</p>
                <StarsRating rate={4} reviews={302} time={false} />
                <p>King Fahd university , 2009</p>
                <Tag tag={tag} />
              </div>
              <div className={styles["doctor-card_body_keys"]}>
                <DoctorKeySummary DoctorKeys={DoctorKeys} />
              </div>
            </div>
            <Button
              width={"140px"}
              height={"40px"}
              color={"#fff"}
              bgColor={"#3492db"}
            >
              Consult
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default DoctorCard;
