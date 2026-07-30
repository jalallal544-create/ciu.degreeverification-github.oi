import express from "express";

import auth from "../middleware/auth.js";

import {
    verifyDegree
} from "../controllers/studentController.js";

import {
    login
} from "../controllers/adminController.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

router.get(
    "/verify/:studentId",
    verifyDegree
);

router.post(
    "/admin/login",
    login
);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

router.get(
    "/admin/profile",
    auth,
    (req, res) => {

        res.json({
            success: true,
            user: req.user
        });

    }
);

export default router;
