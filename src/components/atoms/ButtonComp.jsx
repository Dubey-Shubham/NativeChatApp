import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const ButtonComp = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[styles.button_container, style]}    // here the default class will provide the css untill it is passed as an class
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button_container: {
    backgroundColor: "#00A884",
    width: "100%",
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(4),
    alignItems: "center"
  },
  button_text: {
    fontSize: moderateScale(14),
    color: "white"
  }
})

export default ButtonComp