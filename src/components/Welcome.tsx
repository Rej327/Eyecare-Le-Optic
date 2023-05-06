/** @format */

import Image from "next/image";
import profile from "@/assets/profile.jpeg";
import variable from "@/styles/variables.module.scss";
import { STRING } from "../constant/String";
import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io";

const { welcomeContent } = STRING;
const data = welcomeContent;

export default function Welcome() {
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1000"
      className={variable.welcomeSection}
    >
      <div className={variable.imgContainer}>
        <Image
          src={profile}
          alt="Doc. Chadilyn"
          height={350}
          width={350}
          className={variable.img}
        />
      </div>

      <div className={variable.context}>
        <p
          data-aos="fade-in"
          data-aos-duration="1000"
          className={variable.head}
        >
          {data.head}
        </p>
        <p
          data-aos="fade-in"
          data-aos-duration="1000"
          className={variable.desc}
        >
          {data.desc}
        </p>

        <p
          data-aos="fade-in"
          data-aos-duration="1000"
          className={variable.link}
        >
          <Link href="/AboutUs">About Us </Link>
        </p>
        <p
          data-aos="fade-in"
          data-aos-duration="1000"
          className={variable.link}
        >
          <Link href="/Our-Doctor">Our Doctor </Link>
        </p>
        <p
          data-aos="fade-in"
          data-aos-duration="1000"
          className={variable.link}
        >
          <Link href="#our-clinic">Our Clinic </Link>
        </p>
        <div className={variable.nameContainer}>
          <p
            data-aos="fade-in"
            data-aos-duration="1000"
            className={variable.name}
          >
            {data.name}
          </p>
          <Link
            href="https://www.facebook.com/chadilyn.wachayna"
            target="_blank"
          >
            <IoLogoFacebook className={variable.fb} />
          </Link>
        </div>
      </div>
    </div>
  );
}
