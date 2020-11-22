import { Document } from "mongoose"
import { BaseEntity } from "./baseEntity";

type RecipeStepEntity = BaseEntity & {
    seqId: number;
    quantity: number;
    unit: string;
    name: string;
    comment?: string;
}

export { RecipeStepEntity }