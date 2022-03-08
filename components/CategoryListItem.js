import React from 'react'
import alpineImage from '../assets/alpine.png'

import {
    Image, Text, View, StyleSheet, TouchableOpacity, Alert
} from 'react-native'

export default function CategoryListItem(props) {
    // const showAlert = () =>
    //     Alert.alert(
    //         "Alert Title",
    //         "My Alert Msg",
    //         [
    //             {
    //                 text: "Cancel",
    //                 onPress: () => Alert.alert("Cancel Pressed"),
    //                 style: "cancel",
    //             },
    //         ],
    //         {
    //             cancelable: true,
    //             onDismiss: () =>
    //                 Alert.alert(
    //                     "This alert was dismissed by tapping outside of the alert dialog."
    //                 ),
    //         }
    //     )
    const { category } = props
    // console.log(props)
    return (
        <TouchableOpacity
            activeOpacity={0.3}
            onPress={
                // showAlert
                props.onPress
            }
        >
            <View style={styles.container}>
                <Text style={props.title}>
                    {/* CategoryListItem */}
                    {category.name}
                </Text>
                <Image
                    source={alpineImage}
                    style={styles.CategoryImage}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    CategoryImage: {
        width: 64,
        height: 64
    },
    container: {
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFF',
        borderRadius: 4,
        shadowColor: '#000',
        shadowRadius: 10,
        shadowOpacity: 0.3,
        textShadowOffset: { width: 0, height: 0 },
        marginBottom: 16
    },
    // title : {
    //     textTransform : 'uppercase' ,
    //     marginBottom : 8 ,
    //     fontWeight : '700'
    // }
})