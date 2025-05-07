import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import userStore from '../store/userStore';
import { Link, NavLink } from 'react-router-dom';
import {
    ADMIN_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
} from '../utils/consts';
import Button from 'react-bootstrap/esm/Button';

const Header = () => {
    const { isAuth, user, setUser, setIsAuth } = userStore();

    const logout = () => {
        setUser({});
        setIsAuth(false);
    };

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <NavLink style={{ color: 'black' }} to={SHOP_ROUTE}>
                        Buy Device
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="w-100 justify-content-center">
                    {!isAuth ? (
                        <Nav className="me-auto">
                            <Navbar.Text style={{ marginRight: '10px' }}>
                                <Link to={LOGIN_ROUTE}>Login</Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Link to={REGISTRATION_ROUTE}>Register</Link>
                            </Navbar.Text>
                        </Nav>
                    ) : (
                        <Nav className="d-flex align-items-center gap-3">
                            <Navbar.Text style={{ marginRight: '10px' }}>
                                <Link to={DEVICE_ROUTE}>Devices</Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Link to={ADMIN_ROUTE}>Admin</Link>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Button variant="outline-danger" onClick={() => logout()}>Logout</Button>
                            </Navbar.Text>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
