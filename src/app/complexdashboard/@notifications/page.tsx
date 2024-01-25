import Card from "@/components/card";
import Link from "next/link";
import React from "react";

const Notifications = () => {
	return (
		<Card>
			<div>Notifications</div>
			<Link href="/complex-dashboard/archived" className="ml-4 text-2xl text-red-200">Archived</Link>
		</Card>
	);
};

export default Notifications;
