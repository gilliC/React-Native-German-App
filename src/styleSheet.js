import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F2F4F3'

    },
    container: {
        backgroundColor: '#F2F4F3',
        justifyContent:'center',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#1D3767',
        borderRadius: 10,
        borderStyle: 'solid',
        paddingVertical:10,
        paddingHorizontal:20,
    },
    btnTxt: {
        color: 'white',
        fontSize:20,
        alignItems : 'center',

    },
    txtInput: {
        padding: 10,
        color: '#1D3767',
        fontSize: 15,
        height: 40,
        width: 200

    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop:10,
        paddingHorizontal:80,
        paddingVertical:10,
        marginLeft:10,
        marginRight:10

    },

});

export default styles;

/**

 **/