import { Document } from "mongoose"

type RecipeStepEntity = Document & {
    seqId: number;
    quantity: number;
    unit: string;
    name: string;
    comment?: string;
}

export { RecipeStepEntity }