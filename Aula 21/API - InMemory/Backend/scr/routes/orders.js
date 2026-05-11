import express, { Router } from "express";
import { getOrders, createOrder,getOrderById, updateOrder, deleteOrder } from "../controllers/orderController.js";

const router = express.Router();

router
    .get('/list', getOrders)
    .get('/list/:id', getOrderById)
    .post('/create', createOrder)
    .put('/update/:id', updateOrder)
    .delete('/delete/:id', deleteOrder)

export default router;
