import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import deviceStore from '../store/deviceStore';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CreateDevice = ({ show, handleClose }) => {
    const { types, brands } = deviceStore();
    const [info, setInfo] = useState([]);
    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    };
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    };

    console.log(info);

    return (
        <div>
            <Button variant="primary">Add New Type</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Dropdown className="mt-2 mb-2">
                            <Dropdown.Toggle>Choose Type</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {types.map((type) => {
                                    return (
                                        <Dropdown.Item key={type.id}>
                                            {type.name}
                                        </Dropdown.Item>
                                    );
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle>Choose Brand</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {brands.map((brand) => {
                                    return (
                                        <Dropdown.Item key={brand.id}>
                                            {brand.name}
                                        </Dropdown.Item>
                                    );
                                })}
                            </Dropdown.Menu>
                        </Dropdown>

                        <Form.Control
                            className="mt-3"
                            placeholder="Name of the device"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Price of the device"
                            type="number"
                        />
                        <Form.Control
                            className="mt-3"
                            placeholder="Name of the device"
                            type="file"
                        />
                        <hr />
                        <Button onClick={addInfo} variant="outline-dark">
                            Add new info
                        </Button>
                        {info.map((i) => {
                            return (
                                <Row key={i.number} className="mt-4">
                                    <Col md={4}>
                                        <Form.Control placeholder="Type info name" />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control placeholder="Type info description" />
                                    </Col>
                                    <Col md={4}>
                                        <Button variant="outline-danger" onClick={() => removeInfo(i.number)}>Delete</Button>
                                    </Col>
                                </Row>
                            );
                        })}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-success" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateDevice;
