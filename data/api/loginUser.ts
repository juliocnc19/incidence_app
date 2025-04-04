import { endpoints } from "../../utils/constants/endpoints";
import { api } from "../../utils/lib/api";
import { LoginInput } from "../../utils/types/InputLogin";
import DataUser from "../../core/response/DataUser";

export const loginUser = async (body: LoginInput):Promise<DataUser> => {
  const {data} = await api.post(endpoints.login,body)
  return data
}
