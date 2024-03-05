import { useState } from "react";

const Counter = () => {
	const [n, setN] = useState(0);
	console.log("Counter 리렌더링"); // 리렌더링 확인용
	return (
		<>
			<button onClick={() => setN((p) => p + 1)}>+</button>
			<div>{n}</div>
		</>
	);
};
export default Counter;
