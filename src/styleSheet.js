import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#F2F4F3',


    },
    mainContainer: {
        backgroundColor: '#F2F4F3',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    vocabularyContainer: {
        alignItems: 'center',

    },
    practiceContainer:{
        backgroundColor: '#F2F4F3',
        justifyContent: 'center',
        flex: 1
    },
    listContainer:{
        marginTop:20,
        height:400
    },
    insideView: {
        flex: 1
    },
    btn: {
        backgroundColor: '#1D3767',
        borderRadius: 30,
        borderStyle: 'solid',
        justifyContent: 'center',
        width: 300,
        height: 60,
        marginTop:10


    },
    btnTxt: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    centerTxt: {
        textAlign: 'center'
    },
    txtInput: {
        padding: 10,
        color: '#1D3767',
        fontSize: 15,
        height: 40,
        width: 200

    },
    wordContainer: {
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth:2,

        marginTop: 10,
        paddingHorizontal: 80,
        paddingVertical: 10,
        marginLeft: 10,
        marginRight: 10
    },

});

export default styles;

/**

 **/