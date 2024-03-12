import { IconDefinition, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react';
import { DoorLockContext } from './provider/DoorLockProvider';

export type IconsProps = {
    icon: IconDefinition;
    surgery: string;
}

const Icons = ({icon,surgery}:IconsProps) => {
    const { isTen } = useContext(DoorLockContext)

    return (
        <>
            <FontAwesomeIcon icon={icon} />
            <span>{isTen ? "운영 안함" : surgery}</span>
        </>
    )
}

export default Icons