import { Types } from "mongoose"

type UserModel = {
    id?: Types.ObjectId;
    name: string;
    email: string;
}

export { UserModel }