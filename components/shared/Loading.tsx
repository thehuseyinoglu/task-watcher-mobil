import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={styles.container}>
          <ActivityIndicator size="large" color="#622EA0" />

    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
       
        
    }
})