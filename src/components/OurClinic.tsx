import Clinic1 from "./Clinic1";
import variable from "@/styles/variables.module.scss";
import Clinic2 from "./Clinic2";

export default function OurClinic() {
  return (
    <div className={variable.clinicSection}>
      <p className={variable.head}>OUR CLINIC</p>
      <div className={variable.clinics}>
        <Clinic1 />
        <Clinic2 />
      </div>
    </div>
  );
}
