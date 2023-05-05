/** @format */

import variable from "@/styles/variables.module.scss";
import mason from "@/styles/masonry.module.scss";
import Masonry from "react-masonry-css";
import { STRING } from "../constant/String";
import Image from "next/image";

const { servicesContent } = STRING;
export default function Card() {
	const breakpointColumnsObj = {
		default: 3,
		1024: 3,
		900: 2,
		834: 1,
	};

	return (
		<div className={variable.sectionCard}>
			<p data-aos="fade-in" className={variable.head}>
				WHAT WE DO
			</p>
			<Masonry
				breakpointCols={breakpointColumnsObj}
				className={mason.myMasonryGrid}
				columnClassName={mason.myMasonryGridColumn}
			>
				{servicesContent.map((data) => (
					<div
						data-aos="fade-up"
						data-aos-anchor-placement="bottom-bottom"
						data-aos-duration="1000"
						className={variable.cardContainer}
						key={data.id}
					>
						<Image
							src={data.img}
							width={0}
							height={250}
							alt="service"
							className={variable.cardImage}
						/>
						<div className={variable.card}>
							<p className={variable.title}>{data.title}</p>
							<p className={variable.desc}>{data.desc}</p>
						</div>
					</div>
				))}
			</Masonry>
		</div>
	);
}
