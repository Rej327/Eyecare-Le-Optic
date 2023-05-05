/** @format */

import variable from "@/styles/variables.module.scss";
import ProductCard from "./ProductCard";

export default function ProductOffers() {
  return (
    <div className={variable.productOffers}>
      <p
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className={variable.head}
      >
        OTHER PRODUCT OFFER
      </p>
      <div className={variable.context}>
        <ProductCard />
      </div>
    </div>
  );
}
