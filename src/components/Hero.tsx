import variable from "@/styles/variables.module.scss";
import Button from "./Button";
import style from "../styles/globalButton.module.scss";
import { STRING } from "../constant/String";

const { heroTitle } = STRING;

export default function Hero() {
  return (
    <div className={variable.heroContainer}>
      {heroTitle.map((data) => (
        <div className={variable.bg}>
          <div className={variable.content}>
            <p className={variable.title}>{data.title}</p>
            <p className={variable.subTitle}>{data.subTitle}</p>
            <Button className={style.button} text={data.button} />
          </div>
        </div>
      ))}
    </div>
  );
}
