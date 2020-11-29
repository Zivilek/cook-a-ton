import userRepository from '../dal/repositories/userRepository';
import { UserModel } from '../domain/models/userModel';

class UserManagementService {
    constructor(userRepository: any) {
        this.registerUser = this.registerUser.bind(this);
    }

    async registerUser(login: string, password: string): Promise<UserModel> {
        throw new Error("Not Implemented!");
    }

    async loginUser(login: string, password: string): Promise<UserModel> {
        throw new Error("Not Implemented!");
    }

    async resolveUserFromAccessKey(accessKey: string): Promise<UserModel> {
        throw new Error("Not Implemented!");
    }
}

export default new UserManagementService(userRepository);