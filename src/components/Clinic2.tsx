import Image from "next/image";
import clinic2 from "@/assets/clinic2.jpg";
import variable from "@/styles/ourclinic.module.scss";

export default function Clinic2() {
  return (
    <div className={variable.center}>
      <div className={variable.articleCard}>
        <div className={variable.content}>
          <p className={variable.title}>Eyecare Le Optique</p>
          <p className={variable.date}>Catanauan, Quezon</p>
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
