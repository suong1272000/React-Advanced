import { useEffect, useState } from "react";
import Picture, { pictureProps } from "./Picture";
import Counter from "./Counter";
function App() {
	const [data, setData] = useState<pictureProps[]>([]);
	const url =
		"https://fakerapi.it/api/v1/images?_quantity=5&_type=kittens&_height=300";
	const fetchImages = () => {
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				setData((prev) => [...prev, ...json.data]);
			});
	};

	const hasReached = () => {
		const scrollY = window.scrollY;
		const innerHeight = window.innerHeight;
		const totalHeight = document.documentElement.scrollHeight;
		return scrollY + innerHeight > totalHeight - 1;
	};
	useEffect(() => {
		fetchImages();
		window.addEventListener("scroll", () => {
			const result = hasReached();
			if (result) fetchImages();
		});
	}, []);

	return (
		<div className="App">
			<Counter />
			{data.map((v, i) => (
				<Picture key={i} {...v} />
			))}
		</div>
	);
}

export default App;
