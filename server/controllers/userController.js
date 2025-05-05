import bcrypt, { compare } from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

import ApiError from '../error/apiError.js';
import models from '../models/models.js';

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest('Not valid password or email'));
        }

        const candidate = await models.User.findOne({ where: { email } });
        if (candidate) {
            return next(
                ApiError.badRequest('User with this email already exists')
            );
        }

        const hashedPassword = await bcrypt.hash(password, 8);
        const user = await models.User.create({
            email,
            password: hashedPassword,
            role,
        });
        // creating cart for user
        await models.Cart.create({ userId: user.id });
        const jwt = UserController.generateJwt(user.id, email, role);

        return res.json({ token: jwt });
    }

    async login(req, res, next) {
        const { email, password } = req.body;
        const user = await models.User.findOne({ where: { email } });

        if (!user) {
            return next(ApiError.badRequest('Wrong email or password'));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.badRequest('Wrong email or password'));
        }

        const jwt = UserController.generateJwt(user.id, user.email, user.role);
        return res.json({ token: jwt });
    }

    async check(req, res, next) {
        const token = UserController.generateJwt(req.user.id, req.user.email, req.user.role);

        return res.status(200).json({ token });
    }

    static generateJwt(id, email, role) {
        return jsonwebtoken.sign(
            {
                id,
                email,
                role,
            },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: '24h',
            }
        );
    }
}

export default new UserController();
