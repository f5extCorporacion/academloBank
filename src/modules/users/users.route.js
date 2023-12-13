import express from 'express';
import { createSignup, Login, Histori } from './users.controller.js';

export const router = express.Router();
//users bank
router.post('/signup', createSignup);
router.post('/login', Login);
router.get('/:id/history', Histori);
