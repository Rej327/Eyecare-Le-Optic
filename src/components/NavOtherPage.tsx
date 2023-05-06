/** @format */

import Image from "next/image";
import variable from "../styles/nav.module.scss";
import logo from "../../public/logo.png";
import Hamburger from "./Hamburger";
import Link from "next/link";
import { BiPhoneCall } from "react-icons/bi";

export default function Navigation() {
  return (
    <div className={variable.navSection}>
      <div className={variable.navigation}>
        <div className={variable.logoContainer}>
          <Link href="/">
            <Image
              src={logo}
              className={variable.logoImage}
              alt="logo"
              height={60}
              width={130}
            />
          </Link>
          <Link href="/">
            <Image
              src={logo}
              className={variable.logoImagePhone}
              alt="logo"
              height={40}
              width={80}
            />
          </Link>
        </div>

        <div className={variable.sectionList}>
          <p>
            <Link
              className={variable.link}
              href="/"
              id="style-2"
              data-replace="Home"
            >
              <span>Home</span>
            </Link>
          </p>
          <p>
            <Link
              className={variable.link}
              href="/Our-Doctor"
              id="style-2"
              data-replace="Our Doctor"
            >
              <span>Our Doctor</span>
            </Link>
          </p>
          <p>
            <Link
              className={variable.link}
              href="/CatanauanClinic"
              id="style-2"
              data-replace="Our Clinic"
            >
              <span>Our Clinic</span>
            </Link>
          </p>
          <p>
            <Link
              className={variable.link}
              href="/AboutUs"
              id="style-2"
              data-replace="About Us"
            >
              <span>About Us</span>
            </Link>
          </p>
          <Link href="tel:0917583604">
            <button className={variable.button}>
              <BiPhoneCall className={variable.icon} />
              <span className={variable.buttonLink}>Call Us</span>
            </button>
          </Link>
        </div>
        <Hamburger />
      </div>
    </div>
  );
}
