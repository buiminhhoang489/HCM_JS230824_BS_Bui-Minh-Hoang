import express from 'express';
const router = express.Router();
import { userController } from '../../controllers/user.controller.js';
router.get("/todo", userController.findMany)
router.post("/todo", userController.create)
router.delete("/:userId", userController.delete)
router.patch("/:userId", userController.update)
export default router;