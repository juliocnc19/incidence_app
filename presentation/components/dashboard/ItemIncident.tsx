import { View,StyleSheet, Text, TouchableOpacity } from "react-native"
import Incident from "../../../core/models/Incident"
import { backgroundColors, fontColors } from "../../theme/colors"
import { formatData } from "../../../utils/lib/formatDate"
import StatusTag from "../shared/StatusTag"
import { useRouter } from "expo-router"

const ItemIncident = ({item}:{item:Incident}) =>{
  const router = useRouter()
  return (
    <TouchableOpacity style={styles.container} onPress={()=>router.push( `/(detail)/${item.id}`)}>
      <View>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.date}>{formatData(item.created_at)}</Text>
      </View>
      <StatusTag status_id={item.status_id}/>
    </TouchableOpacity>
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
