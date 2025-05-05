import ApiError from "../error/apiError.js";
import models from "../models/models.js";

class CartController {
    async addToCard(req, res, next) {
        try {
            const { deviceId } = req.body;
            const user = await models.User.findByPk(req.user.id);
            const cart = await user.getCart();
            const cartDevice = await models.CartDevice.create({ cartId: cart.id, deviceId });
    
            res.json({ cartDevice });
        } catch (err) {
            return next(ApiError.internalError('Something went wrong'));
        }
    }

    async getMyCartItems(req, res, next) {
        const user = await models.User.findByPk(req.user.id);
        const cart = await models.Cart.findOne({ where: { userId: user.id } });
        const cartDevice = await models.CartDevice.findAll({
            where: { cartId: cart.id },
            include: models.Device
        });

        res.json(cartDevice);
    }
}

export default new CartController();