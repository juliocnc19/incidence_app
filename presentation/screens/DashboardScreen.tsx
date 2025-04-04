import ListIncident from "../components/dashboard/ListIncident"
import { authStorage } from "../../data/storage/authStorage"
import { useGetIncidentsByUser } from "../hooks/useGetIncidentsByUser"
import { ActivityIndicator} from "react-native"

const DashboardScreen = () => {
  const { user } = authStorage()
  const { data, isLoading, isError, error } = useGetIncidentsByUser(user!.id)
  return (
    <>
      {(isLoading) ?
        <ActivityIndicator/> :
        <ListIncident data={data?.data} isError={isError} error={error}/>
      }
    </>
  )
}

export default DashboardScreen
