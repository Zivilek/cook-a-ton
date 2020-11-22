import { UserEntity } from "../../domain/entities/userEntity";
import { UserModel } from "../../domain/models/userModel";

class UserMapper {
    constructor() {
        this.toModel = this.toModel.bind(this);
    }

    toModel(userEntity: UserEntity): UserModel {
        return {
            id: userEntity._id,
            name: userEntity.name,
            login: userEntity.login,
        };
    }
}

export default new UserMapper();