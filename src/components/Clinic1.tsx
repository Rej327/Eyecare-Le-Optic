/** @format */

import Image from "next/image";
import clinic from "@/assets/insideclinic3.jpg";
import variable from "@/styles/ourclinic.module.scss";

export default function Clinic1() {
  return (
    <div data-aos="fade-right" className={variable.center}>
      <div className={variable.articleCard}>
        <div className={variable.content}>
          <p className={variable.title}>Eyecare Le Optique</p>
          <p className={variable.location}>Catanauan, Quezon</p>
        </div>
        <Image
          src={clinic}
          alt="Clinic Photo"
          width={350}
          height={350}
          className={variable.img}
        />
      </div>
    </div>
  );
}
