import { Types } from "mongoose"
import { BaseEntity } from "./baseEntity";

type RecipeTagEntity = BaseEntity & {
    user?: Types.ObjectId,
    name: string;
    seqId: number;
}

export { RecipeTagEntity }