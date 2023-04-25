import Image from "next/image";
import variable from "../styles/variables.module.scss";
import From from "./Form";
import setAppointment from "../assets/setappointment.jpg";

export default function BookSched() {
  return (
    <div className={variable.bookSchedSection}>
      <div>
        <Image
          src={setAppointment}
          alt="Appointment Photo"
          width={300}
          height={350}
          className={variable.image}
        />
      </div>
      <div>
        <h1>Book Appointment with Us</h1>
        <From />
      </div>
    </div>
  );
}
