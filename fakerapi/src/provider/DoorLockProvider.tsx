import React, { Dispatch, ReactNode, createContext, useState } from "react"

type DoorLockContextType = {
    isTen: boolean,
    setIsTen: Dispatch<React.SetStateAction<boolean>>;
};

type DoorLockProviderProps = {
    children : ReactNode;
};

export const DoorLockContext = createContext<DoorLockContextType>({
    isTen: false,
    setIsTen: () => {},
});

const DoorLockProvider: React.FC<DoorLockProviderProps> = ({ children }) => {
    const [isTen, setIsTen] = useState<boolean>(false);
    return(
        <DoorLockContext.Provider value={{ isTen,setIsTen }}>
                {children}
        </DoorLockContext.Provider>
    );
};

export default DoorLockProvider;