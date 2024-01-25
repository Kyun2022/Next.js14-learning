import Link from "next/link";
import React from "react";

const F1 = () => {
	return (
		<div className="flex flex-col p-4">
			<div>F1 page</div>
			<div className="text-red-200">
				<Link href="/f1/f2">F2</Link>
			</div>
		</div>
	);
};

export default F1;
