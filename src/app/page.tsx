import Link from "next/link";

const Home = () => {
	return (
		<div className="p-4 flex flex-col">
			<h1>Welcome Home!</h1>
			<Link href="/blog">Blog</Link>
			<Link href="/products">Products</Link>
		</div>
	);
};
export default Home;
