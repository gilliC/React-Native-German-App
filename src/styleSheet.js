import {StyleSheet} from 'react-native';

 const styles = StyleSheet.create({
     body:{
         flex: 1,
         flexDirection: 'column',
         justifyContent: 'center',
         alignItems: 'stretch',
         backgroundColor:'#f6f6f7'

     },
    container: {
        backgroundColor:'#D8DBE2' ,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor:'black',
        shadowOffset:{width:10,height:30},
        shadowOpacity:0.2,
        height:300,
        elevation: 50,
    },
     btn:{
         backgroundColor:'#1D3767',
         padding:10,
         borderRadius:10,
         borderStyle: 'solid'
     },
     btnPress:{
         backgroundColor:'#D8DBE2',
         padding:10,
         borderColor:'#1D3767'
     },
     btnTxt:{
         color:'white'
     },
     txtInput:{
         padding:10,
         color:'#1D3767',
         fontSize:15,
         height: 40,
         width:200

     }
});

export default styles;

/**

 **/