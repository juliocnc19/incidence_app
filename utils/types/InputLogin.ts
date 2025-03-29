import User from "../../core/models/User"

export type LoginInput = {
  email: User['email']
  password: User['password']
}
