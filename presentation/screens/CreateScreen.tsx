import { View, StyleSheet } from "react-native"
import CreateForm from "../components/dashboard/CreateForm"

const CreateScreen = () => {
  return (
    <View style={styles.container}>
    <CreateForm/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center"
  }
})

export default CreateScreen
