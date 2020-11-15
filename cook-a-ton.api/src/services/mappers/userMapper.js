import { UserModel } from "../../domain/models/userModel";

class UserMapper {
    constructor() {
        this.toModel = this.toModel.bind(this);
    }

    toModel(userEntity) {
        let name = userEntity.name;
        let login = userEntity.login;

        return new UserModel(name, login);
    }
}

export default new UserMapper();