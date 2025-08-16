import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { OtpInput } from "react-native-otp-entry";
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ButtonComp from '../../components/atoms/ButtonComp';
// import { getItem, saveItem } from '../utils/storage';

const verify_otp = () => {
    const [otp, setOtp] = useState()

    const onPress = () => {
        console.log(otp)
        // saveItem('access_token', 'access');   //setting the localstorage via mmkv 
        // const token = getItem('access_token');
        // console.log("access_token after set:", token)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.head}>
                <AntDesign name="arrowleft" style={styles.backButton} />
                <Text style={styles.headTitle}>Enter OTP Code</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.otpSendText}>Code has been sent to +91</Text>
                <OtpInput
                    numberOfDigits={4}
                    onTextChange={(text) => setOtp(text)}
                    theme={{
                        containerStyle: styles.otpContainer,
                        pinCodeContainerStyle: styles.input_Style,
                    }}
                /> {/*inputStyle is for the singe input styling*/}
                <Text style={styles.otpSendText}>Resend Code in <Text style={styles.counterText}>56</Text></Text>
            </View>
            <View style={styles.footer}>
                <ButtonComp
                    title="Verify"
                    onPress={onPress}
                    style={styles.verifyButton}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: verticalScale(50),
        paddingHorizontal: scale(30)
    },
    head: {
        flexDirection: "row",
        alignItems: "center",
        gap: scale(10)
    },
    backButton: {
        fontSize: moderateScale(24),
        color: "black",
        fontWeight: "bold"
    },
    headTitle: {
        fontSize: moderateScale(20),
        color: "black",
        fontWeight: "bold"
    },
    body: {
        alignItems: "center",
        gap: verticalScale(25)
    },
    counterText: {
        color: "#00A884"
    },
    otpSendText: {
        fontSize: moderateScale(16),
        fontWeight: "400"
    },
    resendText: {

    },
    footer: {
        paddingBottom: verticalScale(20),
        alignItems: 'center',
    },
    verifyButton: {
        borderRadius: moderateScale(30)
    },
    input_Style: {
        borderColor: "black",
        borderRadius: moderateScale(15),
        gap: scale(10),
        height: verticalScale(68),
        width: scale(50)
    },
    otpContainer: {
        gap: scale(1)
    },
})

export default verify_otp