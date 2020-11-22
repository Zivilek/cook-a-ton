import { BaseEntity } from "./baseEntity";

type UserEntity = BaseEntity & {
    name: string;
    login: string;
    passwordHash: string;
}

export { UserEntity }