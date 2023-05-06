/** @format */

import Clinic1 from "./Clinic1";
import variable from "@/styles/variables.module.scss";
import Link from "next/link";

export default function OurClinic() {
  return (
    <div id="our-clinic" className={variable.clinicSection}>
      <p className={variable.head}>OUR CLINIC</p>
      <div className={variable.clinics}>
        <Link href="/CatanauanClinic">
          <Clinic1 />
        </Link>
      </div>
    </div>
  );
}
