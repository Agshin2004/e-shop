import jwt from 'jsonwebtoken';

export default (req, res, next) => {
    if (req.method === 'options') {
        next();
    }

    try {
        // to /auth jwt will be sent with every request, this middleware will attach
        // req.user for next middleware that is userController.check controller and that controller will
        // create new jwt and send back to react client
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token not found' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // user field will be available with all subsequent requests
        req.user = decoded;
        next();
    } catch (e) {
        return res.status(401).json({ message: 'Not authorized' });
    }
};
