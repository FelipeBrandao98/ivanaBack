import { Request, Response, NextFunction } from 'express'

export function TestMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  next()
}
