import { AntDesign, Entypo } from '@expo/vector-icons'
import { useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import Calls from '../../components/molecules/calls'
import Chats from '../../components/molecules/chats'
import Status from '../../components/molecules/status'

const Main = () => {
    const [currentPage, setCurrentPage] = useState("calls")

    const ActivePage = () => {
        switch (currentPage) {
            case "chat":
                return <Chats />
            case "status":
                return <Status />
            case "calls":
                return <Calls />
            default:
                return <Chats />
        }
    }

    const Whatsappheader = () => {
        return (
            <View style={styles.WhatsappStyleHeader}>
                <Text style={styles.whatsappText}>WhatsApp</Text>
                <View style={styles.iconContainer}>
                    <AntDesign name='search1' style={styles.headericon} />
                    <Entypo name='dots-three-vertical' style={styles.headericon} onPress={() => alert("hello")} />
                </View>
            </View>
        )

    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#008069" style="light"></StatusBar>
            <Whatsappheader />
            <View style={styles.topBarContainer}>
                {["chat", "status", "calls"].map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setCurrentPage(item)}
                            style={[
                                styles.topBarButton,
                                item === currentPage && { borderColor: "white" },
                            ]}
                        >
                            <Text style={styles.topBarText}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
            {ActivePage()}
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
    },
    topBarContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: scale(12),
        backgroundColor: "#008069"
    },
    topBarButton: {
        flex: 1,
        alignItems: "center",
        borderBottomWidth: 3,
        paddingBottom: verticalScale(10),
        borderColor: "#008069"
    },
    topBarText: {
        fontSize: moderateScale(10),
        fontWeight: "bold",
        color: "white",
        textTransform: "uppercase"
    },
    WhatsappStyleHeader: {
        backgroundColor: "#008069",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: scale(15),
        paddingBottom: verticalScale(17),
        paddingTop: verticalScale(10)
    },
    iconContainer: {
        flexDirection: "row",
        gap: scale(10)
    },
    whatsappText: {
        fontSize: moderateScale(20),
        fontWeight: "bold",
        color: "white"
    },
    headericon: {
        fontSize: moderateScale(24),
        color: "white"
    }
})

export default Main