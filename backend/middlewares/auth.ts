// import {NextFunction, Request, Response} from "express";
// import {UserModel} from "../models/UserModel";
//
// const userModel = new UserModel();
//
// export const auth = async (req: Request, res: Response, next: NextFunction) => {
//     const user = JSON.parse(req.body.user)
//     if (!req.headers.authorization) {
//         res.status(403).send({
//             message: "Unauthorized"
//         })
//         return;
//     }
//
//     if (req.headers.authorization !== "abc123") {
//         res.status(403).send({
//             message: "Unauthorized"
//         })
//         return;
//     }
//
//     const users = await userModel.getUser(user.id);
//     if (users.length > 1 || users.length === 0) {
//         res.status(404).send({
//             message: "User does not exist"
//         })
//         return;
//     }
//
//     next();
// }


import {NextFunction, Request, Response} from "express";

export const auth = (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization !== "abc123") {
        res.status(403).send({
            message: "Unauthorized"
        });
        return;
    }
    next();
}