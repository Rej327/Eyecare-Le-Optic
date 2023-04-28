/** @format */

import variable from "@/styles/clinics.module.scss";
import CatanauanClinic from "./CatanauanClinic";

export default function Clinic() {
	return (
		<div className={variable.clinicPage}>
			<div className={variable.clinicContainer}>
				<p className={variable.head}>Our Clinics</p>
			</div>
			<CatanauanClinic />
		</div>
	);
}
