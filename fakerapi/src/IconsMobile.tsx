import { IconDefinition, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";

export type IconsMobileProps = {
	icon: IconDefinition;
	surgery: string;
};

const IconsMobile = ({ icon, surgery }: IconsMobileProps) => {
	const styles: CSSProperties = {
		display: "flex",
		flexDirection: "column",
		gap: "20px",
		background: "pink",
	};

	return (
		<section style={styles}>
			<FontAwesomeIcon icon={icon} />
			<span>{surgery}</span>
		</section>
	);
};

export default IconsMobile;
