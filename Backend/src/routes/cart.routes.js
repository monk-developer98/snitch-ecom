import { Router } from "express";
import { authenticateUser } from "../middleware/auth.middleware.js";
import { validateAddToCart, validateIncrementCartItemQuantity } from "../validator/cart.valodator.js";
import { addToCart, getCart, incrementCartItemQuantity } from "../controllers/cart.controller.js";

const router = Router();

/**
 * @route POST /api/cart/add/:productId/:variantId
 * @description Add Item to cart
 * @access Private
 */

router.post("/add/:productId/:variantId", authenticateUser , validateAddToCart , addToCart)

/**
 * @route GET /api/cart
 * @description GET CART DETAILS
 * @access Private
 */
router.get("/", authenticateUser , getCart)

/**
 * @route PATCH /api/cart/quantity/increment/:productId/:variantId
 * @description Update item quantity in carty 
 * @access Private
 * @argument productId - Id of Product to update
 * @argument variantId - Id of the variant to update
 * @argument quantity - New quantity of the item (required)
 */
router.patch("/quantity/increment/:productId/:variantId", authenticateUser , validateIncrementCartItemQuantity , incrementCartItemQuantity )


export default router