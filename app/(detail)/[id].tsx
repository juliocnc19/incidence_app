import { StyleSheet, ScrollView } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { incidentStorage } from "../../data/storage/incidentStorage"
import CardDetail from "../../presentation/components/detail/CardDetail"
import Incident from "../../core/models/Incident"


const Detail = () => {
  const params = useLocalSearchParams<{ id: string }>()
  const { incidents } = incidentStorage()
  const incidentFind = incidents.find((i) => i.id == Number(params.id))
  return (
    <ScrollView  
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}>
      <CardDetail incident={(incidentFind as Incident)} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex:1,
    marginVertical:10,
    marginHorizontal:10,
    alignItems:"center"
  }
})

export default Detail
