// Style Sheet CSS
import "./CategoryButton.css";

// Icons
// import { BsNintendoSwitch } from "react-icons/bs";
import { SiNintendoswitch } from "react-icons/si";
import { SiPlaystation5 } from "react-icons/si";
import { SiNintendogamecube } from "react-icons/si";
import { SiWiiu } from "react-icons/si";
import { IoLogoXbox } from "react-icons/io5";
import { SiPlaystationportable } from "react-icons/si";

function CategoryButton() {
	return (
		<div className="category-container">
			<div className="category-btn">
				<SiNintendoswitch size={50} />
				<span>Nintendo Switch</span>
			</div>
			<div className="category-btn">
				<SiPlaystation5 size={70} />
				<span className="text-sm">Playstation 5</span>
			</div>
			<div className="category-btn">
				<SiNintendogamecube size={50} />
				<span>Gamecube</span>
			</div>
			<div className="category-btn">
				<SiWiiu size={50} />
				<span>Nintendo WiiU</span>
			</div>
			<div className="category-btn">
				<IoLogoXbox size={50} />
				<span>XBox Serie X</span>
			</div>
			<div className="category-btn">
				<SiPlaystationportable size={80} />
				<span>Playstion Portable</span>
			</div>
		</div>
	);
}

export { CategoryButton };
