import { Document } from "mongoose"

type UserEntity = Document & {
    name: string;
    login: string;
    passwordHash: string;
}

export { UserEntity }