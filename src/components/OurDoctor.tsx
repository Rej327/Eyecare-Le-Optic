import profile from "@/assets/profile.jpeg";
import Image from "next/image";
import variable from "../styles/variables.module.scss";

export default function OurDoctor() {
  return (
    <div className={variable.ourDoctorSection}>
      <div className={variable.headerSection}>
        <div className={variable.headContainer}>
          <p className={variable.name}>Doc. Chadilyn Wachayna</p>
          <p className={variable.location}>Berkeley, CA 44701</p>
          <p className={variable.number}>(555) 555-5555</p>
          <p className={variable.email}>sample@sample.com</p>
        </div>
        <Image
          src={profile}
          alt="Doc. Chadilyn"
          height={400}
          width={400}
          className={variable.image}
        />
      </div>
    </div>
  );
}
