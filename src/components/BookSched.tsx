import variable from "../styles/variables.module.scss";
import From from "./Form";

export default function BookSched() {
  return (
    <div className={variable.bookSchedSection}>
      <div>
        <p>Book Schedule</p>
      </div>
      <div>
        <From />
      </div>
    </div>
  );
}
