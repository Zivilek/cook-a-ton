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


    toEntity(userModel: UserModel): UserEntity {
        return {
            _id: userModel.id,
            name: userModel.name,
            login: userModel.login,
        }
    }
}

export default new UserMapper();