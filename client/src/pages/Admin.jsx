import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import CreateType from '../modals/CreateType';
import CreateBrand from '../modals/CreateBrand';
import CreateDevice from '../modals/CreateDevice';

function Admin() {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button variant={'outline-dark'} className="mt-2" onClick={() => setTypeVisible(true)}>
                Add Type
            </Button>
            <Button variant={'outline-dark'} className="mt-2" onClick={() => setBrandVisible(true)}>
                Add Brand
            </Button>
            <Button variant={'outline-dark'} className="mt-2" onClick={() => setDeviceVisible(true)}>
                Add Device
            </Button>

            <CreateType show={typeVisible} handleClose={() => setTypeVisible(false)} />
            <CreateBrand show={brandVisible} handleClose={() => setBrandVisible(false)} />
            <CreateDevice show={deviceVisible} handleClose={() => setDeviceVisible(false)}/>
        </Container>
    );
}

export default Admin;
