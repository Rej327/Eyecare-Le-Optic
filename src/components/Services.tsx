import variable from "@/styles/variables.module.scss";
import { STRING } from "../constant/String";

export default function Services() {
  return (
    <div className={variable.serviceBg}>
      <div className={variable.serviceSection}>
        <p className={variable.head}>Our Services</p>
      </div>
    </div>
  );
}
