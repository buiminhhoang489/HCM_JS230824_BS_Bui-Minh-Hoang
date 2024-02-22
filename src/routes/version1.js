import express from 'express';
const router = express.Router();
import userModule from './modules/user.module.js';
router.use("/v1", userModule)

export default router;