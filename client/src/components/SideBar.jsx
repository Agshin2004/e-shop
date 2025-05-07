import ListGroup from 'react-bootstrap/ListGroup';
import deviceStore from '../store/deviceStore';

const SideBar = () => {
    const { types, selectedType, setSelectedType } = deviceStore();

    return (
        <ListGroup>
            {types.map((type) => {
                return (
                    <ListGroup.Item
                        key={type.id}
                        style={{ cursor: 'pointer' }}
                        onClick={() => setSelectedType(type)}
                        active={type.id === selectedType.id}
                    >
                        {type.name}
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
    );
};

export default SideBar;
