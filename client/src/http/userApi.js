import { authHost, host } from './index';
import { jwtDecode } from 'jwt-decode';

export const registration = async (email, password) => {
    // MAKING ALL USERS ADMIN NOW TO CHECK ADMIN PANEL; DELETE!
    const response = await host.post('/api/user/registration', {
        email,
        password,
        role: 'ADMIN',
    });
    localStorage.setItem('token', response.data.token);
    return jwtDecode(response.data.token);
};

export const login = async (email, password) => {
    const response = await host.post('api/user/login', { email, password });
    localStorage.setItem('token', response.data.token);
    // Return decoded (data that was passed in to jwt on server) jwt token to the client
    return jwtDecode(response.data.token);
};

export const check = async () => {
    const response = await authHost.get('/api/user/auth');
    // Rewrite jwt in localstorage so token will be refreshed
    localStorage.setItem('token', response.data.token);
    return response;
};
