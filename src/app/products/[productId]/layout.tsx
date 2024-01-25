import React from "react";

const getRandomInt = (count: number) => {
	return Math.floor(Math.random() * count);
};

const ProductDetailLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const random = getRandomInt(2);

	if (random === 1) {
		throw new Error("Error loading review");
	}

	return (
		<div className="flex flex-col gap-4 my-4">
			{children}
			<h2>Features products</h2>
		</div>
	);
};

export default ProductDetailLayout;
