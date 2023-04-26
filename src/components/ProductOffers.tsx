/** @format */

import variable from "@/styles/variables.module.scss";

export default function ProductOffers() {
	return (
		<div>
			<p className={variable.productOffers}>OTHER PRODUCT OFFER</p>
			<div className={variable.productsContainer}>
				<div className={variable.products}></div>
				<div className={variable.products}></div>
				<div className={variable.products}></div>
			</div>
		</div>
	);
}
