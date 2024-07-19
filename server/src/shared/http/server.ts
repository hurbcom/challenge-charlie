import AppError from "@shared/errors/AppError";
import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";

require("dotenv").config();

const app = express();
const port = process.env.REACT_APP_PORT;

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error.",
    });
  }
);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
