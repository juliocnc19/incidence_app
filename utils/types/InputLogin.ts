import User from "../../core/entities/User"

export type LoginInput = {
  email: User['email']
  password: User['password']
}
