import Link from "next/link";
import React from "react";

const ProductList = () => {
	const productId = 100;

	return (
		<div className="p-4 flex flex-col">
			<Link href="/">Home</Link>
			<h1>Product List</h1>
			<h2>
				<Link href="products/1">Product1</Link>
			</h2>
			<h2>
				<Link href="products/2">Product2</Link>
			</h2>
			<h2>
				<Link href="products/3" replace>
					Product3
				</Link>
			</h2>
			<h2>
				<Link href={`products/${productId}`}>product {productId}</Link>
			</h2>
		</div>
	);
};

export default ProductList;
