import variable from "../styles/form.module.scss";
import Button from "./Button";
import style from "../styles/globalButton.module.scss";
import { Reset, Name, Email, Number, Date, Time } from "./Logo";

export default function From() {
  return (
    <div>
      <div>
        <form>
          <div className={variable.form}>
            <button>
              <Name />
            </button>
            <input
              className={variable.input}
              placeholder="Full Name"
              required
              type="text"
            />
            <button className={variable.reset} type="reset">
              <Reset />
            </button>
          </div>
          <div className={variable.form}>
            <button>
              <Email />
            </button>
            <input
              className={variable.input}
              placeholder="Email"
              required
              type="text"
            />
            <button className={variable.reset} type="reset">
              <Reset />
            </button>
          </div>
          <div className={variable.form}>
            <button>
              <Number />
            </button>
            <input
              className={variable.input}
              placeholder="Contact Number"
              required
              type="text"
            />
            <button className={variable.reset} type="reset">
              <Reset />
            </button>
          </div>
          <div className={variable.dateTime}>
            <div className={variable.form}>
              <button>
                <Date />
              </button>
              <input
                className={variable.input}
                placeholder="Select Date"
                required
                type="date"
              />
              <button className={variable.reset} type="reset">
                <Reset />
              </button>
            </div>
            <div className={variable.form}>
              <button>
                <Time />
              </button>
              <input
                className={variable.input}
                placeholder="Select Time"
                required
                type="time"
              />
              <button className={variable.reset} type="reset">
                <Reset />
              </button>
            </div>
          </div>
          <div className={variable.btn}>
            <Button className={style.button} text="Set Appointment" />
          </div>
        </form>
      </div>
    </div>
  );
}
