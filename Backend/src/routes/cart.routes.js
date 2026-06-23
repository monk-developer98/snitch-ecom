import { Router } from "express";
import { authenticateUser } from "../middleware/auth.middleware.js";
import { validateAddToCart } from "../validator/cart.valodator.js";
import { addToCart } from "../controllers/cart.controller.js";

const router = Router();

/**
 * @route POST /api/cart/add/:productId/:variantId
 * @description Add Item to cart
 * @access Private
 */

router.post("/add/:productId/:variantId", authenticateUser , validateAddToCart , addToCart)

export default router