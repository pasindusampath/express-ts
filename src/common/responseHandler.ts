import { Response } from "express";
import { HttpStatus } from "./constants/httpStatus.enum";
import { IError } from "../interface/error.interface";

export const successResponse = (code:HttpStatus,response:Response , data:any , alreadyWrappedWithData:boolean = false)=>{
    let responseData = alreadyWrappedWithData ? data : {data};
    response.status(code).json(responseData);
}

export const errorResponse = (code:HttpStatus,response:Response , error:IError , customMessage:string = '')=>{
    const errorContent = {
        code,
        key:error.key,
        message:error.message,
        customMessage
    }
    response.status(code).json({error:errorContent});
}