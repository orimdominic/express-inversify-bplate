import { injectable } from "inversify";
import { UserRepository } from "../model/user.model";

@injectable()
export class UserService {
  constructor(private userRepo: UserRepository){}

  async createUser(){
    const res = await this.userRepo.createUser()
    return `op: userService.createUser
${res}
  `}
  async getUser(){
    const res = await this.userRepo.getUser()
    return `op: userService.getUser
${res}
  `}
  async getUsers(){
    const res = await this.userRepo.getUsers()
    return `op: userService.getUsers
${res}
  `}
  async updateUsers(){
    const res = await this.userRepo.updateUsers()
    return `op: userService.updateUsers
${res}
  `}
  async deleteUsers(){
    const res = await this.userRepo.deleteUsers()
    return `op: userService.deleteUsers
${res}
  `}
}