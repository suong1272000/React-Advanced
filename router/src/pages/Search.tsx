import { useParams } from "react-router-dom";

const Search = () => {
    const { coffeeId } = useParams<{coffeeId?: string}>();
    const coffeeName: {[key: number]:string} = {
        1: '아메리카노',
        2:'라떼',
        3:'민트모카',
        4:'바닐라라떼',
    };

    // 오브젝트에 없는 숫자 거나 undefined 경우의 로직
    const id = coffeeId ? parseInt(coffeeId, 10) : undefined;
    const displayName = id && coffeeName[id] ? coffeeName[id] : "커피 이름을 찾을 수 없습니다.";
    
    return <div>서치페이지 : {displayName}</div>;
};
export default Search;