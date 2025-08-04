import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ButtonComp from '../../components/atoms/ButtonComp'
import imagePaths from '../../constants/imagePaths'
import { router } from 'expo-router'

const terms_agree = () => {

    const onAgree = () => {
        router.push("/(auth)/login")
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
                <Image source={imagePaths.welcome} style={styles.image_style} resizeMode="contain" />
                <Text style={styles.desc_text}>
                    Read our <Text style={styles.link_text}>Privacy Policy</Text>. Tap “Agree and continue” to
                    accept the <Text style={styles.link_text}>Teams of Service</Text>.
                </Text>
                <View style={{ width: moderateScale(300) }}>
                    <ButtonComp title="AGREE AND CONTINUE" onPress={onAgree} />
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.from_text}>From</Text>
                <Text style={styles.fb_text}>Facebook</Text>
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
        paddingVertical: verticalScale(84),
        paddingHorizontal: scale(30)
    },
    header: {
        alignItems: "center",
        gap: verticalScale(30)
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
        color: "#000",
        textTransform: "uppercase",
        fontWeight: "600"
    },
    welcome_text: {
        fontSize: moderateScale(27),
        fontWeight: "bold",
        color: "black"
    },
    image_style: {
        width: moderateScale(250),
        height: moderateScale(250),
        borderRadius: moderateScale(250),
    },
    desc_text: {
        textAlign: "center",
        fontSize: moderateScale(13),
        color: "black"
    },
    link_text: {
        color: "#0C42CC"
    },
})

export default terms_agree