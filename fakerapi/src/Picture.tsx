import { CSSProperties } from "react";

export type pictureProps = {
	description: string;
	title: string;
	url: string;
};

const Picture = ({ description, title, url }: pictureProps) => {
	const pictureStyle: CSSProperties = {
		width: "500px",
		height: "500px",
		border: "1px soild black",
		padding: "10px 14px",
		backgroundColor: "skyblue",
	};

	return (
		<div style={pictureStyle}>
			<img src={url}></img>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
};
export default Picture;
