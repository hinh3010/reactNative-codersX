import React from 'react'
import alpineImage from '../assets/alpine.png'

import {
    Image, Text, View, StyleSheet, TouchableOpacity
} from 'react-native'

export default function CategoryListItem(props) {
    const { product, onAddToCard } = props
    return (

        <View style={styles.shadow}>
            <View style={styles.container}>
                <Image style={styles.img} source={{ uri: product.images[0].url }} />
                <View style={styles.info}>
                    <Text style={styles.name}>
                        {product.name}
                    </Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>
                            {product.price}
                        </Text>
                        <TouchableOpacity onPress={onAddToCard}>
                            <Text style={styles.cartText}>Mua</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow : {
        shadowColor : "#000" ,
        shadowOpacity : 0.1 ,
        shadowRadius : 10 ,
        shadowOffset : {width : 0 ,height : 0}
    },
    container: {
        marginBottom : 20 ,
        backgroundColor: '#FFF',
        borderRadius: 4,
        overflow : 'hidden'
    },
    img : {
        height : 150 ,
        borderTopLeftRadius : 4 ,
        borderBottomLeftRadius : 4 
    },
    info : {
        padding : 8
    },
    
    name : {
        fontSize : 16 ,
        marginBottom : 8
    },
    priceRow : {
        flexDirection : 'row' ,
        alignItems : 'center'
    },
    price : {
        fontSize : 16 ,
        color : '#888' ,
        flex : 1
    },
    cartText : {
        textTransform : 'uppercase' ,
        fontSize : 16 ,
        color : '#2f95dc'
    }
})