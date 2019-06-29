import { Request, Response } from "express";

/**
 * Good first endpoint.
 */
export const helloWorld = (req: Request, res: Response) => {
  res.send("Hello World!");
};
