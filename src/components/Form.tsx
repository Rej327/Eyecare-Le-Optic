import variable from "../styles/form.module.scss";
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
          <div className={variable.form}>
            <button>
              <Date />
            </button>
            <input
              className={variable.input}
              placeholder="Contact Number"
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
              placeholder="Contact Number"
              required
              type="time"
            />
            <button className={variable.reset} type="reset">
              <Reset />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
