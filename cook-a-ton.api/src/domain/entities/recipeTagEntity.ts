import { Document } from "mongoose"

type RecipeTagEntity = Document & {
    name: string;
}

export { RecipeTagEntity }