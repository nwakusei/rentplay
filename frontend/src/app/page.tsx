import Image from "next/image";

// Components
import { CategoryButton } from "./components/CategoryButton";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main>
				<div className="my-8">
					<CategoryButton />
				</div>
				<div className="text-white text-2xl">Novos Jogos</div>
			</main>
		</div>
	);
}
