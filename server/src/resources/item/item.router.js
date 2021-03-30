import { Router } from "express";
import { getItems, getItem } from './item.controller';
import { catchErrors } from '../../utils/errorHandler';

const router = Router();

router.get("/", catchErrors(getItems));
router.get("/:id", catchErrors(getItem));

export { router as default };
