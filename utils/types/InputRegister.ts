import User from "../../core/models/User";


export type InputRegister = {
  first_name: User['first_name']
  last_name: User['last_name']
  email: User['email']
  password: User['password']
  repet_password: User['password']
  role_id?: User['role_id']
  username: User['username']
  avatar_url?: User['avatar_url']
}
