import variable from "@/styles/variables.module.scss";
import { STRING } from "@/constant/String";
import Image from "next/image";

const { otherProducts } = STRING;

export default function ProductCard() {
  return (
    <div className={variable.productCard}>
      {otherProducts.map((data) => (
        <div className={variable.content}>
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
  );
}
