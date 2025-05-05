import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import path from 'path';

import sequelize from './db.js';
import models from './models/models.js';
import router from './routes/index.js';
import errorHandler from './middleware/errorHandler.js';

// env vars are loaded in db.js
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json()); // parse json
// /public/<folderName>/<file> (statici n my case)
app.use('/public', express.static(path.resolve(process.cwd(), 'static')));
app.use(fileUpload());
app.use('/api', router);
app.use(errorHandler); //* Error middleware must at the end of middlewares stack


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log('Server started on port', PORT);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
