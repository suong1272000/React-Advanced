import { useLocation } from "react-router-dom";
export type EmptyType = "NA";
export type ObjEmptyType = { [key in EmptyType]: string };

export const useGetNameFromQuery = (target: string, empty: EmptyType) => {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	return query.get(target) ?? empty; // null or undefined 이면 "NA"
};

export const useGetKeysFromQuery = (target: string[], empty: EmptyType) => {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const arr = target.map((v) => query.get(v) ?? empty);
	return arr;
};
