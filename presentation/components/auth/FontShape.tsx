import { View, StyleSheet } from "react-native"

const FontShape = ()=>{
  return <View style={styles.container}/>
}

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom:0,
    backgroundColor:"#fff",
    height: '75%',     
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    zIndex: 10,  
  }
})

export default FontShape
