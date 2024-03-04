import { useEffect, useState } from "react";
import Picture, { pictureProps } from "./Picture";
function App() {
	const [isLoading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState<pictureProps[]>([]);

	// useEffect(() => {
	// 	const getData = () =>
	// 		fetch("https://fakerapi.it/api/v1/addresses?_quantity=5")
	// 			.then((res) => res.json()) // 응답을 JSON 형태로 변환
	// 			.then((json) => {
	// 				setData([...json.data].map((v) => v.city));
	// 				setLoading(false);
	// 			});
	// 	getData();
	// }, []);

	useEffect(() => {
		fetch(
			"https://fakerapi.it/api/v1/images?_quantity=5&_type=kittens&_height=300"
		)
			.then((res) => res.json())
			.then((json) => {
				setData(json.data);
				setLoading(false);
			});
	}, []);

	return (
		<div className="App">
			{/* {isLoading ? "로딩중" : data.map((v, i) => <div key={i}>{v}</div>)} */}
			{isLoading
				? "로딩중"
				: data.map((v, i) => <Picture key={i} {...v} />)}
		</div>
	);
}

export default App;
