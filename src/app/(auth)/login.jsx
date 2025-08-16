import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { CountryPicker } from "react-native-country-codes-picker"
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ButtonComp from '../../components/atoms/ButtonComp'

const login = () => {

    const [show, setShow] = useState(false);
    const [countryName, setcountryName] = useState("India");
    const [countryCode, setCountryCode] = useState("+91");

    const handlenext = () => {
        router.push("/(auth)/verify_otp")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.heading_container}>
                    <Text style={styles.heading}>Enter your phone number</Text>
                    <Text style={styles.description}>
                        WhatsApp will need to verify your phone number.
                        <Text style={styles.link_description}> What's my number?</Text>
                    </Text>
                </View>
                <View style={styles.input_main_container}>
                    <TouchableOpacity onPress={() => setShow(true)} style={styles.dropdown_container}>
                        <View/>
                        <Text style={styles.dropdown_title}>{countryName}</Text>
                        <AntDesign name="caretdown" size={moderateScale(12)} color="black" />
                    </TouchableOpacity>
                    <View style={styles.horizontal_line} />
                    <View style={styles.input_container}>
                        <View style={styles.country_code}>
                            <Text style={styles.country_code_text}>{countryCode}</Text>
                            <View style={styles.horizontal_line} />
                        </View>
                        <View style={{ gap: verticalScale(10), flex: 1 }}>
                            <TextInput style={styles.input} placeholder='Enter Your Phone Number' placeholderTextColor="black"  />
                            <View style={styles.horizontal_line} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <ButtonComp title={"NEXT"} style={{ paddingHorizontal: scale(29) }} onPress={handlenext} />
            </View>
                <CountryPicker
                    show={show}
                    pickerButtonOnPress={(item) => {
                        setCountryCode(item.dial_code);
                        setcountryName(item.name.en);
                        setShow(false);
                    }}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: scale(40),
        paddingVertical: verticalScale(50),
    },
    header: {
        gap: verticalScale(50)
    },
    footer: {

    },
    heading_container: {
        gap: verticalScale(20)
    },
    input_main_container: {

    },
    heading: {
        fontSize: moderateScale(20),
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    description: {
        textAlign: "center",
        fontSize: moderateScale(13),
        fontWeight: "400",
        color: "black"
    },
    link_description: {
        color: "#002AC0"
    },
    horizontal_line: {
        width: "100%",
        height: verticalScale(1),
        backgroundColor: "#05AA82"
    },
    dropdown_container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(20)
    },
    dropdown_title: {
        fontSize: moderateScale(16),
        fontWeight: "500",
        color: "black"
    },
    input_container: {
        paddingVertical: verticalScale(12),
        flexDirection: "row",
        alignItems: "center",
        gap: scale(10)
    },
    country_code: {
        gap: verticalScale(10),
        fontWeight: "500",
        color: "black",

    },
    country_code_text: {
        fontSize: moderateScale(16),
        fontWeight: "500",
        color: "black",
        paddingVertical: verticalScale(10)
    },
    input: {
        fontSize: moderateScale(16),
        color: "black"
    },
})

export default login
