import { BaseEntity } from "./baseEntity";

type RecipeTagEntity = BaseEntity & {
    name: string;
}

export { RecipeTagEntity }