import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Address = () => {
    const [streets, setStreets] = useState<string[]>([]);
    const { addressId } = useParams<{addressId?: string}>();
    useEffect(() => {
        const fetchData = async (num:any) => {
            const addresses = await fetch(
                `https://fakerapi.it/api/v1/addresses?_quantity=${num}`
            );
            const addressesData = await addresses.json();
            const street = addressesData.data.map((v:any) => v.street);
            setStreets(street);
        };
        if (Id) {
            fetchData(Id);
        }
    }, [undefined]);

     // 오브젝트에 없는 숫자 거나 undefined 경우의 로직
    const Id = addressId ? parseInt(addressId, 10) : undefined;

    return <div>
        {streets.map((street, index) => (
        <div key={index}>{street}</div>
        ))} 
    </div>
};
export default Address;