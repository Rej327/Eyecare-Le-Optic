import variable from "@/styles/variables.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={variable.footerSection}>
      <div className={variable.container}>
        <div className={variable.findUs}>
          <p className={variable.head}>Find Us</p>
          <p className={variable.bldg}>
            RayoDeSol Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Mollitia, distinctio.
          </p>
          <p className={variable.brgy}>Brgy. Poblacion 9 Catanauan, Quezon</p>
        </div>
        <div className={variable.contactUs}>
          <p className={variable.head}>Contact Us</p>
          <p className={variable.num}>(+63)-999-999-9999</p>
          <p className={variable.fb}>Facebook</p>
        </div>
        <div className={variable.quickLinks}>
          <p className={variable.head}>Quick Links</p>
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
            <Link href="#">
              <p className={variable.link}>(+63)-999-999-9999</p>
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
