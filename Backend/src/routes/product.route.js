import { Router } from "express";
import { authenticateSeller } from "../middleware/auth.middleware.js";
import { createProduct, getSellerProduct } from "../controllers/product.controller.js";
import multer from 'multer';
import { createProductValidator } from "../validator/product.validator.js";


const upload = multer({
    storage:multer.memoryStorage(),
    limits:{
        fileSize:5 * 1024 * 1024 //5 MB
    }
})

const router = Router();

/**
 * @route POST /api/products
 * @description Create new Product
 * @access Private (seller only)
 */

router.post("/" , authenticateSeller  ,upload.array('images',7), createProductValidator , createProduct)

/**
 * @route GET /api/products/seller
 * @description Get All products of the authenticated seller
 * @access Private (seller only)
 */

router.get("/seller" , authenticateSeller ,getSellerProduct)

export default router