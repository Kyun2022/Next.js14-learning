import React from "react";

const ProductDetailLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className="flex flex-col gap-4 my-4">
			{children}
			<h2>Features products</h2>
		</div>
	);
};

export default ProductDetailLayout;
