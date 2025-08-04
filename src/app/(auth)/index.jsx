import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import imagePaths from '../../constants/imagePaths'
import { useEffect, useState } from 'react'
import { router } from 'expo-router'

const Auth = () => {

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(true)
      setTimeout(() => {
        router.push("/(auth)/terms_agree")
      }, 4000);
    }, 2000);

    return ()=>{
      clearTimeout(timeout)
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>    {/*it provides some padding top bottom, avoiding data rendering in corners */}
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image style={styles.logo_style} source={imagePaths.logo} resizeMode='contain'></Image>
      </View>
      <View style={styles.footer}>
        {isLoading ?
          <>
            <ActivityIndicator size={moderateScale(50)} color={"#0CCC83"} />
            <Text style={styles.loading_text}>Loading...</Text></> :
          <>
            <Text style={styles.from_text}>From</Text>
            <Text style={styles.fb_text}>Facebook</Text>
          </>
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(70)

  },
  header: {

  },
  body: {

  },
  footer: {
    alignItems: "center"
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373"
  },
  fb_text: {
    fontSize: moderateScale(15),
    color: "#000000"
  },
  logo_style: {
    width: scale(90),    //for horizonall scale
    height: verticalScale(90), //for vertical scale
    borderRadius: moderateScale(10) //for consistent allaround scale
  },
  loading_text: {
    fontSize: moderateScale(15),
    color: "#0CCC83"
  }
})

export default Auth