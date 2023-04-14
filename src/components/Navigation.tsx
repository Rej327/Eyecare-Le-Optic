import Image from "next/image";
import variable from "../styles/variables.module.scss";
import logoImg from "../assets/logo.jpg";
import Hamburger from "./Hamburger";

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
          <p>
            <a href="#" id="style-2" data-replace="Eye Care Services">
              <span>Eye Care Services</span>
            </a>
          </p>
          <p>
            <a href="#" id="style-2" data-replace="Patient Center">
              <span>Patient Center</span>
            </a>
          </p>
          <p>
            <a href="#" id="style-2" data-replace="About Us">
              <span>About Us</span>
            </a>
          </p>
          <p>
            <a href="#" id="style-2" data-replace="(+63)-999-999-9999">
              <span>(+63)-999-999-9999</span>
            </a>
          </p>
        </div>
        <Hamburger />
      </div>
    </div>
  );
}
