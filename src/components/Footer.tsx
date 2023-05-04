import variable from "@/styles/variables.module.scss";
import Link from "next/link";
import { AiOutlineLink } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";

export default function Footer() {
  return (
    <div className={variable.footerSection}>
      <div className={variable.container}>
        <div className={variable.findUs}>
          <div className={variable.headContainer}>
            <p className={variable.head}>Find Us</p>
            <GoLocation className={variable.icon} />
          </div>
          <p className={variable.bldg}>
            <Link href="https://goo.gl/maps/jPZHJTca8tKM1aZh6" target="_blank">
              Eyecare le Optique is an optical clinic located at unit 03 Rayo de
              Sol Building
            </Link>
          </p>
          <p className={variable.brgy}>Brgy. Poblacion 9 Catanauan, Quezon</p>
        </div>
        <div className={variable.contactUs}>
          <div className={variable.headContainer}>
            <p className={variable.head}>Contact Us</p>
            <BiPhoneCall className={variable.icon} />
          </div>
          <p className={variable.num}>
            <Link
              href="tel:0917583604"
              id="style-2"
              data-replace="(+63)-917-583-604"
            >
              (+63)-917-583-604
            </Link>
          </p>
          <p className={variable.fb}>
            <Link
              href="https://www.facebook.com/eyecareleoptique"
              target="_blank"
            >
              Facebook Page
            </Link>
          </p>
        </div>
        <div className={variable.quickLinks}>
          <div className={variable.headContainer}>
            <p className={variable.head}>Quick Links</p>
            <AiOutlineLink className={variable.icon} />
          </div>
          <div className={variable.links}>
            <Link href="/">
              <p className={variable.link}>Home</p>
            </Link>
            <Link href="/CatanauanClinic">
              <p className={variable.link}>Catanauan, Quezon Clinic</p>
            </Link>
            <Link href="/Our-Doctor">
              <p className={variable.link}>Our Doctor</p>
            </Link>
            <Link href="/LamutClinic">
              <p className={variable.link}>Lamut, Ifugao Clinic</p>
            </Link>
            <Link href="#">
              <p className={variable.link}>About Us</p>
            </Link>
          </div>
        </div>
      </div>
      <p className={variable.copyright}>
        Copyright © 2023, All Right Reserved Eyecare Le Optique
      </p>
    </div>
  );
}
