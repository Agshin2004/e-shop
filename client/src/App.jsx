import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap styles
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import userStore from './store/userStore.js';
import { check } from './http/userApi.js';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from 'react';

function App() {
    const { setIsAuth, setUser } = userStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check()
            .then((data) => {
                setUser(true);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        // Return early based on logic (if loading do not show anything but spinner)
        // when loading will be set to true component will rerender and main block will be returned not spinner
        return (
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center">

            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
