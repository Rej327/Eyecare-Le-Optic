import variable from "@/styles/variables.module.scss";
import Image from "next/image";
import { STRING } from "@/constant/String";

const { commitment } = STRING;

export default function () {
  return (
    <div className={variable.commitmentSection}>
      <p className={variable.header}>OUR COMMITMENT TO YOU</p>
      <div className={variable.content}>
        {commitment.map((data) => (
          <div className={variable.card} key={data.id}>
            <Image
              src={data.img}
              alt="clip art"
              width={150}
              height={100}
              className={variable.img}
            />
            <p className={variable.head}>{data.head}</p>
            <p className={variable.desc}>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
