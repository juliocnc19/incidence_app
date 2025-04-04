import { endpoints } from "../../utils/constants/endpoints";
import { api } from "../../utils/lib/api";
import User from "../../core/models/User";
import DataIncidents from "../../core/response/DataIncidents";

export const getIncidentsByUser = async (user_id: User['id']):Promise<DataIncidents> => {
  const {data} = await api.get(`${endpoints.getIncidentsByUser}${user_id}`)
  return data
}
