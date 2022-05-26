import express from "express";

/* import { msg } from "../controller/postss.js"; */

import { msg } from "../controller/postss.js";

const router = express.Router();

router.get("/", msg);

/* export default router; */

module.exports = router;
