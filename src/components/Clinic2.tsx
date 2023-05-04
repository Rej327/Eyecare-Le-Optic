/** @format */

import Image from "next/image";
import clinic2 from "@/assets/clinic2.jpg";
import variable from "@/styles/ourclinic.module.scss";

export default function Clinic2() {
  return (
    <div data-aos="fade-left" className={variable.center}>
      <div className={variable.articleCard}>
        <div className={variable.content}>
          <p className={variable.title}>Eyecare Optical</p>
          <p className={variable.location}>Lamut, Ifugao</p>
        </div>
        <Image
          src={clinic2}
          alt="Clinic Photo"
          width={350}
          height={350}
          className={variable.img}
        />
      </div>
    </div>
  );
}
