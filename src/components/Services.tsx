import variable from "@/styles/variables.module.scss";
import { STRING } from "../constant/String";
import Image from "next/image";

const { servicesContent } = STRING;

export default function Services() {
  return (
    <div className={variable.serviceBg}>
      <div className={variable.serviceSection}>
        <p className={variable.head}>Our Services</p>
        <div className={variable.container}>
          {servicesContent.map((data) => (
            <div className={variable.card}>
              <Image src={data.img} alt="Service" height={200} width={300} />
              <p className={variable.title}>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
