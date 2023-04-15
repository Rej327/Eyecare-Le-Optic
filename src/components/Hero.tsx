import variable from "@/styles/variables.module.scss";
import Button from "./Button";

export default function Hero() {
  return (
    <div className={variable.heroContainer}>
      <div className={variable.bg}>
        <div className={variable.content}>
          <p className={variable.title}>Eye Care Le Optique</p>
          <p className={variable.subTitle}>Eye Clinic</p>
          <Button text="Learn More" />
        </div>
      </div>
    </div>
  );
}
