import { View,StyleSheet, Text } from "react-native"
import Incident from "../../../core/models/Incident"
import { backgroundColors, fontColors } from "../../theme/colors"
import { formatData } from "../../../utils/lib/formatDate"
import StatusTag from "./StatusTag"

const ItemIncident = ({item}:{item:Incident}) =>{
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.date}>{formatData(item.created_at)}</Text>
      </View>
      <StatusTag status_id={item.status_id}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:12,
    margin:12,
    borderRadius:15,
    backgroundColor:backgroundColors.ternary,
  },
  text:{
    color:fontColors.ternary,
    fontSize:17,
    fontWeight:500
  },
  date:{
    marginTop:8,
    color:fontColors.ternary,
    fontSize:12,
  }
})

export default ItemIncident
