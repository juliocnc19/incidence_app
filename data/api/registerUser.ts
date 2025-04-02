import User from "../../core/models/User";
import { endpoints } from "../../utils/constants/endpoints";
import { api } from "../../utils/lib/api";
import { InputRegister } from "../../utils/types/InputRegister";

export const registerUser = async (input: InputRegister):Promise<User> => {
  const {data} =  await api.post(endpoints.register,input)
  return data
}
