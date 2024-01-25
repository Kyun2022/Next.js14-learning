"use client";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
	const router = useRouter();
	const handleClick = () => {
		console.log("Placing your Order");
		router.push("/");
	};

	return (
		<div className="">
			<div>OrderProduct</div>
			<button type="button" onClick={handleClick}>
				Place Order
			</button>
		</div>
	);
};

export default OrderProduct;
