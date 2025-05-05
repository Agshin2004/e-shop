import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'USER',
    },
});

const Cart = sequelize.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

const CartDevice = sequelize.define('cart_device', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

const Device = sequelize.define('device', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const Type = sequelize.define('type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
});

const Brand = sequelize.define('brand', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
});

const Rating = sequelize.define('rating', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

const DeviceInfo = sequelize.define('device_info', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const TypeBrand = sequelize.define('type_brand', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    // All foreign keys will be added by sequelize
});

//* One device can have many DeviceInfo:
// Title: "Display", Description: "6.1-inch OLED"
// Title: "Processor", Description: "A15 Bionic"
// this creates a foreign key deviceId in the device_info table pointing back to the device table
Device.hasMany(DeviceInfo);
//* Each DeviceInfo belongs to one device
DeviceInfo.belongsTo(Device);

//* One User can have one Cart
User.hasOne(Cart);
Cart.belongsTo(User);

//* On User can have one many rating (rated devices)
User.hasMany(Rating);
Rating.belongsTo(User);

//* One Cart can have many CartDevices (meaning devices in the cart)
Cart.hasMany(CartDevice);
CartDevice.belongsTo(Cart);

//* One Cart can have many types (phone, laptop etc)
Type.hasMany(Device);
Device.belongsTo(Type);

//* One brand can have many devices and one device can have one brand
Brand.hasMany(Device);
Device.belongsTo(Brand);

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(CartDevice);
CartDevice.belongsTo(Device);

Device.hasMany(DeviceInfo); // Adds a foreign key (deviceId) in DeviceInfo table
DeviceInfo.belongsTo(Device); // makes DeviceInfo.deviceId a foreign key referencing Device

Type.belongsToMany(Brand, { through: TypeBrand });
Brand.belongsToMany(Type, { through: TypeBrand });

const models = {
    User,
    Cart,
    Device,
    CartDevice,
    Type,
    Brand,
    Rating,
    DeviceInfo,
    TypeBrand,
};

export default models;
