import { Router } from "express";

const router = Router();

router.get("/", (_, res) => res.send("Healty"));

export { router as default };
