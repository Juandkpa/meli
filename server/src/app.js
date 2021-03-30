import { json, urlencoded } from "body-parser";
import cors from "cors";
import express from "express";
import { notFound } from "./utils/errorHandler";
import healthRouter from "./resources/health/health.router";
import itemsRouter from "./resources/item/item.router";
import { developmentErrors, productionErrors } from "./middleware/errors";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/", healthRouter);
app.use("/api/items", itemsRouter);
app.use(notFound);

if (app.get("env") === "development") {
  app.use(developmentErrors);
}

if (app.get("env") === "production") {
  app.use(productionErrors);
}

export { app as default };
