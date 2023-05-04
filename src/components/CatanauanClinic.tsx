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
      <p
        data-aos="fade-down"
        data-aos-duration="1500"
        className={variable.header}
      >
        VISIT US
      </p>
      <div className={variable.location}>
        <Link href="https://goo.gl/maps/jPZHJTca8tKM1aZh6" target="_blank">
          <Image
            src={map}
            alt="location"
            height={350}
            width={500}
            className={variable.map}
            data-aos="fade-right"
            data-aos-duration="1500"
          />
        </Link>
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className={variable.details}
        >
          <p
            data-aos="fade-in"
            data-aos-duration="1500"
            className={variable.town}
          >
            Catanauan, Quezon
          </p>
          <p
            data-aos="fade-in"
            data-aos-duration="1500"
            className={variable.address}
          >
            Eyecare Le Optique is an optical clinic located at unit 03 Rayo de
            Sol Building
          </p>
          <div className={variable.schedule}>
            <p data-aos="fade-in" data-aos-duration="1500">
              Clinic Schedule
            </p>
            <p data-aos="fade-in" data-aos-duration="1500">
              MONDAY to SATURDAY
            </p>
            <p data-aos="fade-in" data-aos-duration="1500">
              From 8:00 AM to 6:00 PM
            </p>
          </div>
        </div>
      </div>
      <p
        data-aos="fade-in"
        data-aos-duration="1500"
        className={variable.insideClinic}
      >
        INSIDE THE CLINIC
      </p>
      <div className={variable.clinicPhotos}>
        {clinicPhoto.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            key={data.id}
          >
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
