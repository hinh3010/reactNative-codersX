import { StyleSheet, FlatList ,View,Text } from 'react-native';

export default function Settings(props) {
    // console.log(props)
    
    return (
        <View>
            <Text>card</Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 8,
        paddingTop: 16
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
});
