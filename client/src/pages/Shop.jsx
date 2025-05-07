import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from '../components/SideBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { createType, fetchTypes } from '../http/deviceApi';
import deviceStore from '../store/deviceStore';


function Shop() {
    const { types, setTypes } = deviceStore();

    useEffect(() => {
        fetchTypes().then(data => {
            setTypes(data);
        })
    }, []);

    return (
        <Container>
            <Row>
                <Col className="mt-2" md={3}>
                    <SideBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
}

export default Shop;
