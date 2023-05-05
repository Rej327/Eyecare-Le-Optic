import variable from "@/styles/variables.module.scss";
import about from "@/assets/appointmentbg.jpg";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className={variable.aboutSection}>
      <div className={variable.aboutContainer}>
        <p
          data-aos="fade-down"
          data-aos-duration="1500"
          className={variable.header}
        >
          About Us
        </p>
        <div className={variable.content}>
          <Image
            src={about}
            alt="clinic"
            width={500}
            height={500}
            className={variable.img}
            data-aos="fade-right"
            data-aos-duration="1500"
          />
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className={variable.context}
          >
            <p className={variable.welcome}>Welcome to Eyecare Le Optique</p>
            <p>
              We are a dedicated team of eye care professionals who are
              committed to providing exceptional care for our patients. Our
              clinic is equipped with state-of-the-art technology and we are
              proud to offer a wide range of services to help you maintain
              optimal eye health.
            </p>
            <p>
              Our experienced optometrists and ophthalmologists have a wealth of
              knowledge and expertise in the field of eye care. We offer
              comprehensive eye exams, prescription glasses and contact lenses,
              treatment for various eye conditions, and surgical options for
              those who require more advanced care.
            </p>
            <p>
              We understand that each patient is unique, which is why we take
              the time to get to know you and your individual needs. Our goal is
              to provide personalized care that is tailored to your specific
              requirements.
            </p>
            <p>
              At our Eye Clinic, we are committed to delivering the highest
              standard of care possible. We strive to create a warm and
              welcoming environment where you feel comfortable and at ease
              during your visit.
            </p>
            <p>
              Thank you for considering our Eye Clinic for your eye care needs.
              We look forward to serving you and helping you achieve optimal eye
              health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
