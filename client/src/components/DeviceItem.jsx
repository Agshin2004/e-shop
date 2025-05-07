import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { DEVICE_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className="m-2">
            <Card
                className="p-2"
                style={{ width: 200, cursor: 'pinter' }}
                border="dark"
                onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
            >
                <Image
                    src={device.img}
                    style={{ height: '100%', width: '100%', marginBottom: 10 }}
                />
                <div>{device.name}</div>
                <sub className="pb-2 pt-2">{device.rating}★</sub>
            </Card>
        </Col>
    );
};

export default DeviceItem;
