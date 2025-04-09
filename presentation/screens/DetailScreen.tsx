import { ScrollView, StyleSheet } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { incidentStorage } from "../../data/storage/incidentStorage"
import Attachments from "../components/detail/Attachments"
import CardDetail from "../components/detail/CardDetail"
import Incident from "../../core/models/Incident"

const DetailScreen = () => {
  const params = useLocalSearchParams<{ id: string }>()
  const { incidents } = incidentStorage()
  const incidentFind = incidents.find((i) => i.id == Number(params.id))
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}>
      <CardDetail incident={(incidentFind as Incident)} />
      <Attachments />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    alignItems: "center"
  }
})


export default DetailScreen
