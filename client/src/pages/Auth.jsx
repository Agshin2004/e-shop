import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration } from '../http/userApi';
import userStore from '../store/userStore';

// one auth page, based on the url we decide wether this is login page or registration
const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const { user, setUser, setIsAuth } = userStore();

    const click = async () => {
        try {
            // universal function for login btn and register
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            setUser(data);
            setIsAuth(true);

            navigate(SHOP_ROUTE);
        } catch (e) {
            if (e instanceof ReferenceError || e instanceof TypeError) {
                console.log(e.message);
                return;
            }
            alert(e);
        }
    };

    return (
        <div>
            <Container
                className="d-flex justify-content-center align-items-center"
                style={{ height: window.innerHeight - 54 }}
            >
                <Form className="w-75 p-3 border border-primary">
                    <h1 className="text-center">
                        {isLogin ? 'Login' : 'Register'}
                    </h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div>
                        <Button
                            variant="outline-success"
                            type="button"
                            onClick={click}
                        >
                            Submit
                        </Button>
                        <br />
                        <small>
                            {isLogin ? (
                                <div>
                                    Do not have an account?&nbsp;
                                    <Link>Register</Link>
                                </div>
                            ) : (
                                <div>
                                    Already have an account?&nbsp;
                                    <Link>Login</Link>
                                </div>
                            )}
                        </small>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Auth;
