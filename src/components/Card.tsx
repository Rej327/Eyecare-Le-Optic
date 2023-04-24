import variable from "@/styles/variables.module.scss";
import mason from "@/styles/masonry.module.scss";
import Masonry from "react-masonry-css";
import { STRING } from "../constant/String";
import Image from "next/image";
import serviceList from "@/assets/serviceList.jpg";

const { servicesContent } = STRING;
export default function Card() {
  const breakpointColumnsObj = {
    default: 3,
    1024: 3,
    768: 2,
    414: 1,
  };

  return (
    <div className={variable.sectionCard}>
      <p className={variable.head}>WHAT WILL DO?</p>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={mason.myMasonryGrid}
        columnClassName={mason.myMasonryGridColumn}
      >
        {servicesContent.map((data) => (
          <div className={variable.cardContainer}>
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
      ;
    </div>
  );
}
