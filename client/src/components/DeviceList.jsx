import React from 'react';
import deviceStore from '../store/deviceStore';
import DeviceItem from './DeviceItem';
import Row from 'react-bootstrap/Row';

const DeviceList = () => {
    const { devices } = deviceStore();
    console.log(devices);
    return (
        <Row className="d-flex">
            {devices.map((device) => {
                return <DeviceItem key={device.id} device={device} />;
            })}
        </Row>
    );
};

export default DeviceList;
