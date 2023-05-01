/** @format */

import Clinic1 from "./Clinic1";
import variable from "@/styles/variables.module.scss";
import Clinic2 from "./Clinic2";
import Link from "next/link";

export default function OurClinic() {
	return (
		<div id="clinic" className={variable.clinicSection}>
			<p className={variable.head}>OUR CLINIC</p>
			<div className={variable.clinics}>
				<Link href="/CatanauanClinic">
					<Clinic1 />
				</Link>
				<Link href="/LamutClinic">
					<Clinic2 />
				</Link>
			</div>
		</div>
	);
}
