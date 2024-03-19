import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Book = () => {
    const [titles, setTitles] = useState<string[]>([]);
    const { bookId } = useParams<{bookId?: string}>();
    useEffect(() => {
        const fetchData = async (num:any) => {
            const books = await fetch(
                `https://fakerapi.it/api/v1/books?_quantity=${num}`
            );
            const booksData = await books.json();
            const title = booksData.data.map((v:any) => v.title);
            setTitles(title);
        };
        if (Id) {
            fetchData(Id);
        }
    }, [undefined]);

     // 오브젝트에 없는 숫자 거나 undefined 경우의 로직
    const Id = bookId ? parseInt(bookId, 10) : undefined;

    return <div>
        {titles.map((title, index) => (
        <div key={index}>{title}</div>
        ))}
    </div>
};
export default Book;