import { useState } from "react";
import Button from "./Button";
type list = {
	todo: string;
}; //list라는 타입 선언

const Todolist = () => {
	const [todo, setTodo] = useState<list[]>([]); //todo 배열에 넣을것

	const Prompt = () => {
		const userInput = prompt("할 일을 추가하세요.");
		if (userInput) {
			setTodo([...todo, { todo: userInput }]);
		}
	};

	return (
		<>
			<h2>Todo</h2>
			<div>
				{todo.map((v) => (
					<div>{v.todo}</div>
				))}
			</div>
			<Button action={Prompt} />
		</>
	);
};

export default Todolist;
