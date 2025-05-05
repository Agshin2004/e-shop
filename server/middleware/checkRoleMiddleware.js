import jwt  from 'jsonwebtoken';

export default (role) => {
    return (req, res, next) => {
        if (req.method === 'options') {
            next();
        }

        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'Token not found' });
            }
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            if (decoded.role !== role) {
                return res.status(403).json({ message: 'Not authorized' });
            }

            // user field will be available with all subsequent requests
            req.user = decoded;
            next();
        } catch (e) {
            return res.status(401).json({ message: 'Not authorized' });
        }
    };
};
