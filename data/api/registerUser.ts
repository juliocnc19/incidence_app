import DataUser from "../../core/response/DataUser";
import { endpoints } from "../../utils/constants/endpoints";
import { api } from "../../utils/lib/api";
import { InputRegister } from "../../utils/types/InputRegister";

export const registerUser = async (input: InputRegister): Promise<DataUser> => {
  const { data } = await api.post(endpoints.register, input)
  return data
}
