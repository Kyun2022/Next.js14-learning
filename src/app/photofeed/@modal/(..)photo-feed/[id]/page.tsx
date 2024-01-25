import Modal from "@/components/modal";
import Image from "next/image";
import wondersImages, { WonderImage } from "../../../wonders";

export default function PhotoModal({
	params: { id },
}: {
	params: { id: string };
}) {
	const photo: WonderImage | undefined = wondersImages.find((p) => p.id === id);

	if (!photo) {
		// photoが見つからなかった場合の処理。例えばエラーメッセージを表示するなど。
		return <div>Photo not found</div>;
	}

	return (
		<Modal>
			<Image
				alt={photo.name}
				src={photo.src}
				className="w-full object-cover aspect-square"
			/>

			<div className="bg-white p-4">
				<h2 className="text-xl font-semibold">{photo.name}</h2>
				<h3>{photo.photographer}</h3>
				<h3>{photo.location}</h3>
			</div>
		</Modal>
	);
}
