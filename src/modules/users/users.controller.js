import { UserService } from './users.service.js';

//class catchAsync
/*ESta clase retornara todos los errores para Optimizar Code */
const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).cath(next);
  };
};

//crear post
export const createSignup = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    const accountNumber = Math.floor(Math.random() * 900000) + 100000;
    const user = await UserService.create({
      name,
      password,
      accountNumber,
    });
    return res.status(201).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: `Error En el proceso 👀 👺 🤬 👿 💀 🤢🧨`, err });
  }
};

//actualizar
export const Login = async (req, res, next) => {
  try {
    const { accountNumber, password } = req.body;

    const logint = await UserService.loginservise({ accountNumber, password });

    if (!logint) {
      return res
        .status(500)
        .json({ mensaje: `Error URL 👀 👺 🤬 👿 💀 🤢🧨`, logint });
    }
    return res.status(200).json({
      menssage: 'Estas logueado',
      datos: logint,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: `Error URL 👀 👺 🤬 👿 💀 🤢🧨`, error });
  }
};

//Traer datos con parametros
export const Histori = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await UserService.history(id);
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'user not found',
      });
    }
    return res.status(200).json({ user });
  } catch (error) {
    return res
      .status(500)
      .json({ mensaje: `Error  En el proceso 👀 👺 🤬 👿 💀 🤢🧨`, error });
  }
};
