import { controller, httpGet } from "inversify-express-utils";
import { UserService } from "../service/user.service";

@controller("/users")
export class UserController {

  constructor(private userService: UserService){}

  @httpGet("/")
  async getUsers() {
    return this.userService.getUsers()
  }
}