import { Types } from "mongoose"
import { BaseEntity } from "./baseEntity"

type RecipeCourseEntity = BaseEntity & {
    user?: Types.ObjectId,
    name: string;
    seqId: number;
}

export { RecipeCourseEntity }