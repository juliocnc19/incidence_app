import ListIncident from "../components/dashboard/ListIncident"
import { authStorage } from "../../data/storage/authStorage"
import { useGetIncidentsByUser } from "../hooks/useGetIncidentsByUser"
import { ActivityIndicator, View, StyleSheet } from "react-native"

const DashboardScreen = () => {
  const { user } = authStorage()
  const { data, isLoading, isError, error } = useGetIncidentsByUser(user!.id)
  return (
    <View style={styles.container}>
      {(isLoading) ?
        <ActivityIndicator size={"large"}/> :
        <ListIncident data={data?.data} isError={isError} error={error} />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
})

export default DashboardScreen
