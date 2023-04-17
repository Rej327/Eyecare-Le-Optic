import Image from "next/image";
import profile from "@/assets/profile.jpeg";
import variable from "@/styles/variables.module.scss";
import { STRING } from "../constant/String";

const { welcomeContent } = STRING;

export default function Welcome() {
  return (
    <div className={variable.welcomeSection}>
      <Image src={profile} alt="Doc. Chadilyn" height={350} width={350} />
      {welcomeContent.map((data) => (
        <div className={variable.context}>
          <p className={variable.head}>{data.head}</p>
          <p className={variable.desc}>{data.desc}</p>
          <p className={variable.name}>{data.name}</p>
          <p className={variable.title}>{data.title}</p>
        </div>
      ))}
    </div>
  );
}
