/** @format */

import variable from "@/styles/clinics.module.scss";
import CatanauanClinic from "./CatanaauanClinic";

export default function () {
  return (
    <div className={variable.clinicPage}>
      <div className={variable.clinicContainer}>
        <p className={variable.head}>Our Clinics</p>
      </div>
      <CatanauanClinic />
    </div>
  );
}
