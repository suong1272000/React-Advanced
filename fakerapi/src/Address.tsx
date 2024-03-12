export type addressProps = {
    streetName : string;
    buildingNumber : string;
    street : string;
};

const Address = ({streetName, buildingNumber, street}:addressProps) => {
    return (
        <div>
            <h1>{streetName}</h1>
            <h2>{buildingNumber}</h2>
            <p>{street}</p>
        </div>
    );
};
export default Address;