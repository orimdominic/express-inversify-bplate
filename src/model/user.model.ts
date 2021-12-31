import { injectable } from "inversify";

/* A repository is an abstraction layer over the ORM */
@injectable()
export class UserRepository {
  async createUser(){return "op: userRepository.createUser"}
  async getUsers(){return "op: userRepository.getUsers"}
  async getUser(){return "op: userRepository.fetUser"}
  async updateUsers(){return "op: userRepository.updateUsers"}
  async deleteUsers(){return "op: userRepository.deleteUsers"}
}