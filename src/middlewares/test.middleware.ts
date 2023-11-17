import { Request, Response, NextFunction } from 'express'

export function TestMiddleware(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  console.log(`your Request: ${request}`)
  console.log(`your Response: ${response}`)
  next()
}
