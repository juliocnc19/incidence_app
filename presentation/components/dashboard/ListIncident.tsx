import { FlatList, StyleSheet } from "react-native"
import Incident from "../../../core/models/Incident"
import EmptyIncident from "./EmptyIncident"
import ItemIncident from "./ItemIncident"
import MessageError from "./MessageError"

const ListIncident = ({ data, isError, error }: { data?: Incident[], isError: boolean, error: Error | null }) => {
  return (
    <>
      {!isError ?
        <>
          {data?.length == 0 ?
          <EmptyIncident/> :
          <FlatList
          data={data}
          renderItem={({item}) => <ItemIncident item={item}/>}
          />
          }
        </>
        :
        <MessageError message={(error as any).response.data.detail}/>
      }
    </>
  )
}

const styles = StyleSheet.create({

})

export default ListIncident
