import { Router } from "express";
import { validateRegisterUser } from "../validator/auth.validator.js";

const router = Router();

router.post("/regiter" , validateRegisterUser)


export default router;