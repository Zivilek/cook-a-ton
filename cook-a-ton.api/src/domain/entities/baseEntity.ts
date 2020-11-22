import { Types } from "mongoose"

type BaseEntity = {
    _id: Types.ObjectId;
    updatedAt: Date;
    createAt: Date;
}

export { BaseEntity }