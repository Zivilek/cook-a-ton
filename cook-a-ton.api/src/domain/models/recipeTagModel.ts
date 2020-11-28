import { Types } from "mongoose"

type RecipeTagModel = {
    id?: Types.ObjectId;
    name: string;
    seqId: number;
}

export { RecipeTagModel }