import express, { Router } from "express"; 
import {verifyPayment , createOrder } from "../Controller/payment.controller.js"

const router = express.Router()

router.post("/order", createOrder)
router.post("/verify", verifyPayment)

export default router; 