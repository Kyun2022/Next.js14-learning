import Link from "next/link";
import React from "react";

const F4 = () => {
	return (
		<div className="">
			<div>F4 page</div>
			<div className="text-red-200">
				<Link href="/f1/f3">F3</Link>
				<Link href="/about">About</Link>
			</div>
		</div>
	);
};

export default F4;
