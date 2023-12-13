import express from 'express';
import { router as usersRoute } from '../modules/users/users.route.js';
import { router as transfer } from '../modules/transfer/transfer.route.js';

export const router = express.Router();

router.use('/transfers', transfer);
router.use('/users', usersRoute);
