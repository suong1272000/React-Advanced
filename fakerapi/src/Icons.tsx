import { IconDefinition, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSProperties } from "react";

export type IconsProps = {
	icon: IconDefinition;
	surgery: string;
};

const Icons = ({ icon, surgery }: IconsProps) => {
	const styles: CSSProperties = {
		display: "flex",
		gap: "10px",
		background: "skyblue",
	};

	return (
		<section style={styles}>
			<FontAwesomeIcon icon={icon} />
			<span>{surgery}</span>
		</section>
	);
};

export default Icons;
