import variable from "@/styles/variables.module.scss";
import { STRING } from "@/constant/String";
import Image from "next/image";

const { otherProducts } = STRING;

export default function ProductCard() {
  return (
    <div className={variable.productCard}>
      <div className={variable.cardbg}>
        {otherProducts.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            className={variable.content}
            key={data.id}
          >
            <Image
              src={data.img}
              height={315}
              width={315}
              alt="Product"
              className={variable.img}
            />
            <p className={variable.title}>{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
