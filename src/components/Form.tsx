import variable from "../styles/form.module.scss";
import style from "../styles/globalButton.module.scss";
import { Name, Email, Number, Date, Time } from "./Logo";

export default function From() {
  return (
    <div>
      <div>
        <form
          target="_blank"
          action="https://formsubmit.co/resujeff27@gmail.com"
          method="POST"
        >
          <div className={variable.form}>
            <button>
              <Name />
            </button>
            <input
              className={variable.input}
              placeholder="Full Name"
              required
              type="text"
              name="Full name"
            />
          </div>
          <div className={variable.form}>
            <button>
              <Email />
            </button>
            <input
              className={variable.input}
              placeholder="Email"
              required
              type="email"
              name="Email"
            />
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
              name="Contact Number"
            />
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
                name="Date"
              />
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
                name="Time"
              />
            </div>
          </div>
          <div className={variable.btn}>
            <button className={style.button} type="submit">
              Set Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
