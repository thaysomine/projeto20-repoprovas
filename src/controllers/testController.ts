import { Request, Response } from "express";

import * as testRepository from "../repositories/testRepository.js";
import * as testService from "../services/testService.js";

export async function insertTest(req: Request, res: Response) {
    const data : testRepository.TestInsertData = req.body;
    await testService.insertTest(data);
    res.sendStatus(201);
}