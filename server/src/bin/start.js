#!/usr/bin/env node
import {} from "dotenv/config";
import http from "http";
import app from "../app";

const PORT = process.env.PORT || 5000;

app.set("port", PORT);
const server = http.createServer(app);

const onListening = () => {
  console.log(`REST API running -> PORT ${PORT}`);
};

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  if (error.code === "EACCES") {
    console.error(`Port ${PORT} requires elevated privileges`);
    process.exit(1);
  } else if (error.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use`);
    process.exit(1);
  } else {
    throw error;
  }
};

const run = () => {
  server.listen(PORT);
  server.on("error", onError);
  server.on("listening", onListening);
};

run();
