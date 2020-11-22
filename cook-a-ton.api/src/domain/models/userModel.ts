import { Types } from "mongoose"

type UserModel = {
    id: Types.ObjectId;
    name: string;
    login: string;
}

export { UserModel }