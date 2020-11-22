import { Types } from "mongoose"

type RecipeTagModel = {
    id?: Types.ObjectId;
    name: string;
}

export { RecipeTagModel }