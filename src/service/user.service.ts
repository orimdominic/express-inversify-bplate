import { injectable } from "inversify";
import { userRepo as userRepoInstance } from "../model/user.model";

@injectable()
export class UserService {
  constructor(private userRepo = userRepoInstance) {}

  async createUser() {
    const res = await this.userRepo.create();
    return `op: userService.createUser
${res}
  `;
  }
  async getUser() {
    const res = await this.userRepo.getOne();
    return `op: userService.getUser
${res}
  `;
  }
  async getUsers() {
    const res = await this.userRepo.getMany();
    return `op: userService.getUsers
${res}
  `;
  }
  async updateUsers() {
    const res = await this.userRepo.update();
    return `op: userService.updateUsers
${res}
  `;
  }
  async deleteUsers() {
    const res = await this.userRepo.delete();
    return `op: userService.deleteUsers
${res}
  `;
  }
}
