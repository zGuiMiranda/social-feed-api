import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import app from "./app";
import "./socket.io";

const port = process.env.PORT || 8080;
app.server.listen(port);
