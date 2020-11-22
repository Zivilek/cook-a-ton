import { Types } from "mongoose"
import { BaseEntity } from "./baseEntity"

type RecipeCourseEntity = BaseEntity & {
    name: string;
}

export { RecipeCourseEntity }