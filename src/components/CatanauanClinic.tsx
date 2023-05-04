/** @format */

import variable from "@/styles/clinics.module.scss";
import Image from "next/image";
import map from "@/assets/map.png";
import Link from "next/link";
import { STRING } from "../constant/String";

const { clinicPhoto } = STRING;

export default function CatanauanClinic() {
  return (
    <div className={variable.content}>
      <p className={variable.header}>VISIT US</p>
      <div className={variable.location}>
        <Link href="https://goo.gl/maps/jPZHJTca8tKM1aZh6" target="_blank">
          <Image
            src={map}
            alt="location"
            height={350}
            width={500}
            className={variable.map}
          />
        </Link>
        <div className={variable.details}>
          <p className={variable.town}>Catanauan, Quezon</p>
          <p className={variable.address}>
            Eyecare Le Optique is an optical clinic located at unit 03 Rayo de
            Sol Building
          </p>
          <div className={variable.schedule}>
            <p>Clinic Schedule</p>
            <p>MONDAY to SATURDAY</p>
            <p>From 8:00 AM to 6:00 PM</p>
          </div>
        </div>
      </div>
      <p className={variable.insideClinic}>INSIDE THE CLINIC</p>
      <div className={variable.clinicPhotos}>
        {clinicPhoto.map((data) => (
          <div key={data.id}>
            <Image
              src={data.img}
              alt="clinic"
              height={300}
              width={350}
              className={variable.clinicImages}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
