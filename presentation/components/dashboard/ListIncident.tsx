import { FlatList, StyleSheet, View } from "react-native"
import Incident from "../../../core/models/Incident"
import EmptyIncident from "./EmptyIncident"
import ItemIncident from "./ItemIncident"
import MessageError from "./MessageError"
import { incidentStorage } from "../../../data/storage/incidentStorage"
import { useEffect } from "react"

const ListIncident = ({ data, isError, error }: { data?: Incident[], isError: boolean, error: Error | null }) => {
  const { setIncidents, incidents } = incidentStorage()

  useEffect(() => {
    
    if (!isError && data && data.length > 0) {
      setIncidents(data)
    }

  }, [data])
  return (
    <>
      {!isError ?
        <>
          {incidents?.length == 0 ?
            <EmptyIncident /> :
            <View style={styles.container}>
              <FlatList
                style={{ width: "100%" }}
                data={incidents}
                renderItem={({ item }) => <ItemIncident item={item} />}
              />
            </View>
          }
        </>
        :
        <MessageError message={(error as any).response.data.detail} />
      }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  }
})

export default ListIncident
