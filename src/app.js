import express from 'express';
import { router } from './routes/index.js';
import { AppError } from './error/app.error.js';
import { globalErrorHandle } from './error/Error.controller.js';
import morgan from 'morgan';
import { envs } from './config/enviroments/enviroments.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//rutas
app.use('/api/v1', router);
app.use(morgan('dev'));
//manejo de errores
app.all('*', (req, res, next) => {
  return next(
    new AppError(`Error URL ${req.originalUrl} 👀 👺 🤬 👿 💀 🤢🧨`, 404)
  );
});
if (envs.NODE_ENV === 'development') {
  console.log(`* Ejecutando en ${envs.NODE_ENV}* `);
} else if (envs.NODE_ENV === 'production') {
  console.log(` *Ejecutando en ${envs.NODE_ENV}*`);
}

//app.use(globalErrorHandle);

export default app;
