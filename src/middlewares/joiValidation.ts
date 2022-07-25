import joi from 'joi';

import { Request, Response, NextFunction } from 'express';

export async function validateSignup(req: Request, res: Response, next: NextFunction) {
    const data: {email: string, password: string, confirmPassword: string} = req.body;
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(10).required(),
        confirmPassword: joi.string().min(10).valid(joi.ref('password')).required()
    });
    const { error } = schema.validate(data);
    if (error) throw new Error(error.message);
    next();
}

export async function validateLogin(req: Request, res: Response, next: NextFunction) {
    const data: {email: string, password: string} = req.body;
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(10).required()
    });
    const { error } = schema.validate(data);
    if (error) throw new Error(error.message);
    next();
}

export async function validateTest(req: Request, res: Response, next: NextFunction) {
    const data: {name: string, pdfUrl: string, categoryId: number, teacherDisciplineId: number} = req.body;
    const schema = joi.object({
        name: joi.string().required(),
        pdfUrl: joi.string().required(),
        categoryId: joi.number().required(),
        teacherDisciplineId: joi.number().required()
    });
    const { error } = schema.validate(data);
    if (error) throw new Error(error.message);
    next();
}