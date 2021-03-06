import React from "react";
import {Text,TouchableOpacity} from "react-native";

const Button = ({func,children})=>{
  return(
    <TouchableOpacity onPress={func} style={styles.buttonStyle}>
    <Text style={styles.textStyle}>
      {children}
    </Text>
    </TouchableOpacity>
  );
};

const styles={
  buttonStyle:{
    flex:1,
    alignSelf:"stretch",
    backgroundColor:"#fff",
    borderRadius:7,
    borderWidth:1,
    borderColor:"#007aff",
    marginLeft:5,
    marginRight:5,
  },
  textStyle:{
    alignSelf:"center",
    color:"#007aff",
    fontSize:18,
    fontWeight:"700",
    paddingTop:10,
    paddingBottom:10
  }
}

export {Button};
