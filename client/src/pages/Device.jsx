import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/esm/Image';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

function Device() {
    const device = {
        id: 1,
        name: 'Iphone 12 PRO',
        price: 1200,
        rating: 5,
        img: 'https://placecats.com/300/200',
    };

    const infos = [
        { id: 1, title: 'RAM', description: '5GB' },
        { id: 2, title: 'Camera', description: '12MP' },
        { id: 3, title: 'CPU', description: 'Pentinum 3' },
    ];

    return (
        <Container className="mt-2">
            <Row>
                <Col md={4}>
                    <Image width={300} height={200} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row>
                        <h2>{device.name}</h2>
                        <h3>{device.rating} ★</h3>

                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{
                            width: 300,
                            height: 300,
                            fontSize: 32,
                            border: '5px solid lightgray',
                        }}
                    >
                        <h3>{device.price}</h3>
                        <Button>Add To Card</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex mt-2">
                {infos.map((info, idx) => {
                    return (
                        <Row
                            key={info.id}
                            style={{
                                background:
                                    idx % 2 === 0 ? 'lightgray' : 'transparent',
                                padding: 10,
                            }}
                        >
                            {info.title}: {info.description}
                        </Row>
                    );
                })}
            </Row>
        </Container>
    );
}

export default Device;
