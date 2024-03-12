import { useState } from "react";
import Icons, { IconsProps } from "./Icons";
import { faBoxTissue, faEye, faSyringe } from "@fortawesome/free-solid-svg-icons";
import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import Change from "./Change";

function App() {
	const [data, setData] = useState<IconsProps[]>([
		{surgery:"눈성형", icon: faEye },
		{surgery:"코성형", icon: faBoxTissue },
		{surgery:"보톡스", icon: faSyringe },
		{surgery:"필러", icon: faProductHunt },
	]);
	return (
		<div className="App">
			<Change />
			{data.map((v,i)=>(
				<Icons key={i} {...v}></Icons>
			))}
		</div>
	);
};

export default App;
