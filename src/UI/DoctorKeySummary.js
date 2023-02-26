import React from "react";
import { GrLanguage } from "react-icons/gr";
import { RiTimer2Fill } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { GiAchievement } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { BsCardList } from "react-icons/bs";
import styles from "./DoctorKeySummary.module.css";

const DoctorKeyObject = {
  location: <GoLocation />,
  language: <GrLanguage />,
  time: <RiTimer2Fill />,
  consultation: <GiAchievement />,
  fees: <MdPayment />,
  insurance: <BsCardList />,
};

const DoctorKeySummary = (props) => {
  return (
    <ul className={styles["doctor__keys"]}>
      {props.DoctorKeys.map((key, index) => {
        return (
          <li key={index}>
            {DoctorKeyObject[Object.keys(key)[0]]}
            {Object.values(key)[0]}
          </li>
        );
      })}
    </ul>
  );
};
export default DoctorKeySummary;
