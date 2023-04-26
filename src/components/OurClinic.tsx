/** @format */

import Clinic1 from "./Clinic1";
import variable from "@/styles/variables.module.scss";
import Clinic2 from "./Clinic2";
import Link from "next/link";

export default function OurClinic() {
	return (
		<div className={variable.clinicSection}>
			<p className={variable.head}>OUR CLINIC</p>
			<div className={variable.clinics}>
				<Link href="/Clinic">
					<Clinic1 />
				</Link>
				<Link href="/Clinic">
					<Clinic2 />
				</Link>
			</div>
		</div>
	);
}
