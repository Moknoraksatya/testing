
import React,{Component} from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity,
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import NavigationService from '../Service/navigationService'
import { NAV_TYPES } from '../Navigation/navTypes'
export default class History extends Component{
    constructor(prop){
        super(prop)
        this.state={
           
        } 
    }
    render(){
        return(
            <>
                <View style={styles.container}>
                    <View style={styles.inner}>
                        <View style={styles.btnBack}>
                            <TouchableOpacity onPress={()=>{NavigationService.navigate(NAV_TYPES.MAIN_HOME01)}}>
                                <MaterialIcons
                                    style={{fontWeight:'bold',color:'#005792',marginRight:'5%',fontSize:40}} name="keyboard-arrow-left" size={15} color={'#ffffff'}> 
                                </MaterialIcons>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.benner}>
                            <Image
                                style={styles.centerLogo}
                                source={require('../Assets/images/logoMST.png')}
                            />
                        </View>    
                        <View style={styles.btnBack}>

                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <TouchableOpacity style={styles.list}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.RESULTPACKAGE)}}>
                                <View style={styles.imageBox} >
                                    <Image
                                        style={styles.Logo}
                                        source={require('../Assets/images/RFP.jpg')}
                                    />
                                </View>
                                <View style={styles.listTitleBox} >
                                    <Text style={styles.text}>ប្រវត្តិបញ្ញើសរុប</Text>
                                </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listContainer}>
                        <TouchableOpacity style={styles.list}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.RESULTPACKAGE)}}>
                            <View style={styles.imageBox} >
                                <Image
                                    style={styles.Logo}
                                    source={require('../Assets/images/SuccessTick.jpg')}
                                />
                            </View>
                            <View style={styles.listTitleBox} >
                            <Text style={styles.text}>ប្រវត្តិបញ្ញើជោគជ័យ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listContainer}>
                        <TouchableOpacity style={styles.list}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.RESULTPACKAGE)}}>
                            <View style={styles.imageBox} >
                                <Image
                                    style={styles.Logo}
                                    source={require('../Assets/images/unSuccess.jpg')}
                                />
                            </View>
                            <View style={styles.listTitleBox} >
                            <Text style={styles.text}>ប្រវត្តិបញ្ញើបរាជ័យ</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listContainerLast}>
                        <TouchableOpacity style={styles.list}
                            onPress={()=>{NavigationService.navigate(NAV_TYPES.DELAY)}}>
                                <View style={styles.imageBox} >
                                    <Image
                                        style={styles.Logo1} 
                                        source={require('../Assets/images/delay-Clock.jpg')}
                                    />
                                </View>
                            <View style={styles.listTitleBox} >
                                <Text style={styles.text}>ឥវ៉ាន់ពន្យាពេលទទួល</Text>
                            </View> 
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },  
    inner:{
        flex: 0.15,
        flexDirection: 'row',
        // justifyContent: 'center',
        // backgroundColor: 'yellow',
    },
    btnBack:{
        flex: 0.2,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor: 'red',
    },
    listContainer:{
        flex: 0.1,
        flexDirection:'row',
        backgroundColor: '#d4e3fa',
        padding: 10,
        paddingBottom: 0,
    },
    listContainerLast:{
        flex: 0.1,
        flexDirection:'row',
        backgroundColor: '#d4e3fa',
        padding: 10,
    },
    list:{
        flex: 1,
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius: 5,
    },
    imageBox:{
        flex:0.35,
        flexDirection:'row',
        // backgroundColor: 'red',
        // justifyContent:'center',
        alignItems: 'center',
    },
    listTitleBox:{
        flex:0.65,
        flexDirection:'row',
        // backgroundColor: 'yellow',
        // justifyContent:'center',
        alignItems: 'center',
    },
    Logo:{
        width: 40,
        height: 40,
        marginLeft: 20,
    },
    Logo1:{
        width: 50,
        height: 50,
        marginLeft: 12,
    },
    text:{
        fontSize: 18,
        color: 'black',
        fontFamily:'KhmerOScontent',
    },
    centerLogo: {
        flex: 1,
        width: 150,
        height: 80,
    },





    // btn: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     backgroundColor: 'green',
    //     marginRight: 10,
    // },
    benner: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // inner1:{
    //     flex: 0.1,
    //     flexDirection: 'row'
    // },
   
    // benner1: {
    //     flex: 0.30,
    //     backgroundColor: 'white',
    //     justifyContent: 'center',
    // },
    // benner2: {
    //     flex: 1,
    //     borderColor: 'skyblue',
    //     borderBottomWidth: 2,
    //     borderTopWidth: 2,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'white',
    // },
    // benner3: {
    //     flex: 1,
    //     borderColor: 'skyblue',
    //     borderBottomWidth: 2,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'white',
    // },
    // text:{
    //     fontSize: 20,
    //     color: 'skyblue',
    // },
    
    // Logo: {
    //     flex: 0.8,
    //     width: 50,
    //     height: 45,
    //     marginLeft: 20,
    // },
 
  });
  