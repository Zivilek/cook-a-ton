import { BaseEntity } from "./baseEntity";

type UserEntity = BaseEntity & {
    name: string;
    email: string;
    passwordHash?: string;
}

export { UserEntity }