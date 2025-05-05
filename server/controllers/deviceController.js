import { v4 } from 'uuid';
import path from 'path';

import models from '../models/models.js';
import ApiError from '../error/apiError.js';

class DeviceController {
    async create(req, res, next) {
        try {
            let { name, price, brandId, typeId, info } = req.body;
            const img = req.files?.img;
            if (!img) {
                return next(ApiError.badRequest('Image was not uploaded'));
            }
            let fileName = v4().concat('.jpg');

            img.mv(path.resolve(process.cwd(), 'static', fileName));

            const device = await models.Device.create({
                name,
                price,
                brandId,
                typeId,
                info,
                img: fileName,
            });

            if (info) {
                // if info was in request body
                info = JSON.parse(info); // parse info since when client sends using form data it comes to server as string (because of encoding)
                info.forEach((i) => {
                    // await is not used on purpose so it won't block code and deviceinfo will create entries when it can
                    models.DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id,
                    });
                });
            }

            res.status(200).json(device);
        } catch (err) {
            next(ApiError.badRequest(err.message));
        }
    }

    async getAll(req, res) {
        let { brandId, typeId, limit, page } = req.query;
        page = page || 1;
        limit = limit || 2;
        let offset = page * limit - limit;
        let devices;

        if (!brandId && !typeId) {
            // return all devices if brandId or typeId not specified
            devices = await models.Device.findAndCountAll({ limit, offset });
        }

        if (brandId && !typeId) {
            // If brand present but not type
            devices = await models.Device.findAndCountAll({
                where: { brandId },
                limit,
                offset,
            });
        }

        if (!brandId && typeId) {
            // If type present but not brand
            devices = await models.Device.findAndCountAll({
                where: { typeId },
                limit,
                offset,
            });
        }

        if (brandId && typeId) {
            devices = await models.Device.findAndCountAll({
                where: { typeId, brandId },
                limit,
                offset,
            });
        }

        return res.json(devices);
    }

    async getOne(req, res) {
        const { id } = req.params;
        const device = await models.Device.findOne({
            where: { id },
            include: [{ model: models.DeviceInfo }],
        });

        return res.json(device);
    }
}

export default new DeviceController();
