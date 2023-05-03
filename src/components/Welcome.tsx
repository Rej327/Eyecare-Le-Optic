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
    <div className={variable.welcomeSection}>
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
        <p className={variable.head}>{data.head}</p>
        <p className={variable.desc}>{data.desc}</p>

        <p className={variable.link}>
          <Link href="/AboutUs">About Us </Link>
        </p>
        <p className={variable.link}>
          <Link href="/Our-Doctor">Our Doctor </Link>
        </p>
        <div className={variable.nameContainer}>
          <p className={variable.name}>{data.name}</p>
          <Link
            href="https://www.facebook.com/chadilyn.wachayna"
            target="_blank"
          >
            <IoLogoFacebook className={variable.fb} />
          </Link>
        </div>
        <p className={variable.title}>{data.title}</p>
      </div>
    </div>
  );
}
