/** @format */

import Image from "next/image";
import variable from "../styles/nav.module.scss";
import logoImg from "../assets/logo.jpg";
import Hamburger from "./Hamburger";
import Link from "next/link";

export default function NavOtherPage() {
	return (
		<div className={variable.navSection}>
			<div className={variable.navigation}>
				<div className={variable.logoContainer}>
					<Image
						src={logoImg}
						className={variable.logoImage}
						alt="logo"
						height={30}
						width={60}
					/>
				</div>

				<div className={variable.sectionList}>
					<p>
						<Link href="/" id="style-2" data-replace="Home">
							<span>Home</span>
						</Link>
					</p>
					<p>
						<Link href="/Our-Doctor" id="style-2" data-replace="Our Doctor">
							<span>Our Doctor</span>
						</Link>
					</p>
					<p>
						<Link href="/Clinic" id="style-2" data-replace="Clinic">
							<span>Clinic</span>
						</Link>
					</p>
					<p>
						<a href="#" id="style-2" data-replace="About Us">
							<span>About Us</span>
						</a>
					</p>
					<p>
						<a href="#" id="style-2" data-replace="(+63)-999-999-9999">
							<span>(+63)-999-999-9999</span>
						</a>
					</p>
				</div>
				<Hamburger />
			</div>
		</div>
	);
}
