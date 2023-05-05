/** @format */

import Image from "next/image";
import variable from "../styles/nav.module.scss";
import logoImg from "../assets/logo.png";
import Link from "next/link";
import Hamburger from "./HamburgerOtherPage";

export default function NavOtherPage() {
	return (
		<div className={variable.navSection}>
			<div className={variable.navigation}>
				<Link href="/">
					<div className={variable.logoContainer}>
						<Image
							src={logoImg}
							className={variable.logoImage}
							alt="logo"
							height={60}
							width={130}
						/>
					</div>
				</Link>

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
						<Link href="/AboutUs" id="style-2" data-replace="About Us">
							<span>About Us</span>
						</Link>
					</p>
					<p>
						<Link
							href="tel:0917583604"
							id="style-2"
							data-replace="(+63)-917-583-604"
						>
							<span>(+63)-917-583-604</span>
						</Link>
					</p>
				</div>
				<Hamburger />
			</div>
		</div>
	);
}
