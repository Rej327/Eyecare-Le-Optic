/** @format */

import profile from "@/assets/profile.jpeg";
import Image from "next/image";
import variable from "../styles/variables.module.scss";

export default function OurDoctor() {
	return (
		<div className={variable.ourDoctorSection}>
			<p
				data-aos="fade-down"
				data-aos-duration="1500"
				className={variable.header}
			>
				OUR DOCTOR
			</p>
			<div
				data-aos="fade-right"
				data-aos-duration="1500"
				className={variable.headerSection}
			>
				<div className={variable.headContainer}>
					<p className={variable.name}>Doc. Chadilyn Wachayna</p>
					<p className={variable.title}>Optometrist, OD.</p>
					<p className={variable.location}>
						12B. Gladiola St. Roxas District, Quezon City Philippines
					</p>
					<p className={variable.number}>(+63)-917-583-6604</p>
					<p className={variable.email}>chadip24@gmail.com</p>
				</div>
				<Image
					src={profile}
					alt="Doc. Chadilyn"
					height={400}
					width={400}
					className={variable.image}
					data-aos="fade-left"
					data-aos-duration="1500"
				/>
			</div>
		</div>
	);
}
