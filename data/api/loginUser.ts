import { endpoints } from "../../utils/constants/endpoints";
import { api } from "../../utils/lib/api";
import { LoginInput } from "../../utils/types/InputLogin";

export const loginUser = async (body: LoginInput) => {
  const {data} = await api.post(endpoints.login,body)
  return data
}
