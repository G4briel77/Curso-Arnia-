import { Request, Response } from "express";



export function startController (request: Request , response: Response)   {
    response.send('Pagina home');
}