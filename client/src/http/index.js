import axios from 'axios';

const host = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const authHost = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Using interceptor to automatically pass in token
// from docs: Axios interceptors are functions that run before a request
// is sent (request interceptor) or after a response is received (response interceptor)
// Use cases:  Attach headers (like auth tokens), Log requests/responses, Handle errors globally
const authInterceptor = (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return config;
};

authHost.interceptors.request.use(authInterceptor);

export { host, authHost };
