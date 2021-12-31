import { controller, httpDelete, httpGet, httpPost, httpPut, request } from "inversify-express-utils";
import { UserService } from "../service/user.service";

@controller("/users")
export class UserController {

  constructor(private userService: UserService){}

  @httpPost("/")
  async createUser() {
    return this.userService.createUser()
  }

  @httpGet("/")
  async getUsers() {
    return this.userService.getUsers()
  }

  @httpGet("/:id")
  async getUser() {
    return this.userService.getUser()
  }

  @httpPut("/:id")
  async updateUser() {
    return this.userService.updateUsers()
  }

  @httpDelete("/:id")
  async deleteUser() {
    return this.userService.deleteUsers()
  }
}