import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const MessageCard = ({ name, message, time, count, image }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.leftcontainer}>
        <Image source={image} style={styles.image} />
        <View style={styles}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.message}>{message}</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        {time && <Text style={styles.time}>{time}</Text>}
        {
          !!count &&
          <View style={styles.messageCountContainer}>
            <Text style={styles.messageCount}>{count}</Text>
          </View>
        }
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(15),
  },
  image: {
    height: moderateScale(53),
    width: moderateScale(53),
    borderRadius: moderateScale(53),
  },
  name: {
    fontWeight: "bold",
    fontSize: moderateScale(14),
    color: "black"
  },
  message: {
    fontSize: moderateScale(13),
    color: "#889095",
    fontWeight: "500"
  },
  time: {
    color: "#998E8E",
    fontWeight: "bold",
    fontSize: moderateScale(12)
  },
  messageCountContainer: {
    backgroundColor: "#036A01",
    width: moderateScale(22),
    height: moderateScale(22),
    borderRadius: moderateScale(22),
    justifyContent: "center",
    alignItems: "center"
  },
  messageCount: {
    color: "white",
    fontSize: moderateScale(12)
  },
  leftcontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10)
  },
  rightContainer: {
    alignItems: "flex-end",
    gap: verticalScale(7)
  }
})

export default MessageCard