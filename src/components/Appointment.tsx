/** @format */

import variable from "@/styles/variables.module.scss";
import BookSched from "./BookSched";

export default function Appointment() {
	return (
		<div className={variable.appointmentSection} id="appointment">
			<div className={variable.container}>
				<BookSched />
			</div>
		</div>
	);
}
