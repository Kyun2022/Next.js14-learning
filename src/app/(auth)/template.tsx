"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
	{ name: "Register", href: "/register" },
	{ name: "Login", href: "/login" },
	{ name: "Forgot password", href: "/forgotpassword" },
];

const AuthLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const pathname = usePathname();
	const [input, setInput] = useState("");

	return (
		<>
			<div className=" ">
				<div className="mx-auto block">
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						className="border border-black rounded-lg mx-auto block my-4"
					/>
				</div>
				<div className="flex flex-row gap-4">
					{navLinks.map((link) => {
						const isActive = pathname.startsWith(link.href);
						return (
							<Link
								key={link.name}
								href={link.href}
								className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
							>
								{link.name}
							</Link>
						);
					})}
				</div>
			</div>
			<h1 className="mt-4 text-3xl">{children}</h1>
		</>
	);
};

export default AuthLayout;
