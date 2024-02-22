import express from 'express';
const router = express.Router();
import version1 from './version1.js'
router.use('/api', version1)
export default router;