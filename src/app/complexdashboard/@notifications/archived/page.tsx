import Card from "@/components/card";
import Link from "next/link";
import React from "react";

const ArchivedNotifications = () => {
	return (
		<Card>
			<div className="">Archived Notifications </div>
			<Link
				href="/complex-dashboard"
				className="block ml-4 text-2xl text-red-200"
			>
				Default
			</Link>
		</Card>
	);
};

export default ArchivedNotifications;
