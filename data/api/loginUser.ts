import { endpoints } from "../../utils/constants/endpoints";
import { api } from "../../utils/lib/api";
import { LoginInput } from "../../utils/types/InputLogin";
import User from "../../core/models/User";

export const loginUser = async (body: LoginInput):Promise<User> => {
  const {data} = await api.post(endpoints.login,body)
  return data
}
