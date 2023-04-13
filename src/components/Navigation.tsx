import Image from "next/image";
import variable from "../styles/variables.module.scss";
import logoImg from "../assets/logo.jpg";

export default function Navigation() {
  return (
    <div className={variable.navSection}>
      <div className={variable.navigation}>
        <div className={variable.logoContainer}>
          <Image
            src={logoImg}
            className={variable.logoImage}
            alt="logo"
            height={30}
            width={60}
          />
          <p className={variable.logoName}>Eyecare le Optique</p>
        </div>

        <div className={variable.sectionList}>
          <p className="list">Eye Care Services</p>
          <p className="list">Patient Center</p>
          <p className="list">About Us</p>
          <p className="list">(+63)-999-999-9999</p>
        </div>
      </div>
    </div>
  );
}
