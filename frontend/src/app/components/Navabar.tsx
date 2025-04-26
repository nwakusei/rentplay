// Imports Principais
import Image from "next/image";

// Style Sheet CSS
import "./Navbar.css";

function Navbar() {
	return (
		<header>
			<nav className="navbar">
				<ul className="">
					<Image
						src="https://images.tcdn.com.br/files/1297101/themes/3/img/settings/LogoSite.png"
						alt="Logo do site"
						width={100}
						height={100}
					/>
					<li className="">Home</li>
					<li className="">Catálogo</li>
				</ul>
			</nav>
		</header>
	);
}

export { Navbar };
