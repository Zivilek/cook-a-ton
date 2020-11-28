import { Types } from "mongoose";

type RecipeCourseModel = {
    id?: Types.ObjectId;
    name: string;
    seqId: number;
}

export { RecipeCourseModel }