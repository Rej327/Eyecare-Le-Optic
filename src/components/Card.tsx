import variable from "@/styles/variables.module.scss";
import { STRING } from "../constant/String";

const { servicesContent } = STRING;
export default function Card() {
  return (
    <div className={variable.sectionCard}>
      <div className={variable.container}>
        {servicesContent.map((data) => (
          <div className={variable.card}>
            <p className={variable.title}>{data.title}</p>
            <p className={variable.desc}>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
