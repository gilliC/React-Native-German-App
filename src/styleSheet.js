import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#F2F4F3'

    },
    container: {
        backgroundColor: '#F2F4F3',
        justifyContent:'center',
        alignItems: 'center'
    },
    containrWithShadow: {
        backgroundColor: '#F2F4F3',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 10, height: 30},
        shadowOpacity: 0.2,
        height: 300,
        elevation: 50,
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
        fontSize:20
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
        borderStyle: 'solid',
        borderWidth: 1,
        marginTop:10,
        paddingHorizontal:80,
        paddingVertical:10

    },
});

export default styles;

/**

 **/