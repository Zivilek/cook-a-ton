import { Document } from "mongoose"

type RecipeCourseEntity = Document & {
    name: string;
}

export { RecipeCourseEntity }