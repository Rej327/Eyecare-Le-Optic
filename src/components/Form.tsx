import variable from "../styles/form.module.scss";
import style from "../styles/globalButton.module.scss";
import { Name, Email, Number, Date, Time } from "./Logo";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function From() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6w5wasm",
        "template_r4fadpr",
        e.currentTarget,
        "FSbjMbFNlJOLGuiuP"
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setNumber("");
          setDate("");
          setTime("");
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Error sending message!");
        }
      );
  };

  return (
    <div>
      <div>
        <form id="form" onSubmit={handleSubmit}>
          <div className={variable.form}>
            <button>
              <Name />
            </button>
            <input
              className={variable.input}
              placeholder="Full Name"
              required
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
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
