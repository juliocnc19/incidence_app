import { Role } from "react-native"

export default interface User {
  id: number
  first_name: string
  last_name: string
  email: string
  username: string
  password: string
  avatar_url: string
  role_id: string
  created_at: string
  updated_at: string
  token:string
  role:Role
}
