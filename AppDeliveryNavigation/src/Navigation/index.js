import React from 'react'
import {View,Image,StyleSheet,Text,Platform,TouchableOpacity} from 'react-native'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {NAV_TYPES} from './navTypes'
import screenLogin from '../Containers/LoginContainer'
import screenHome from '../Containers/HomeContainer'
import Home from '../Containers/HomeContainer_01'
import LoadingContainer from '../Containers/LoadingContainer'
import PhoneCallContainer from '../Containers/PhoneCallContainer'
import MapContainer from '../Containers/MapContainer'
import MapContainer_01 from '../Containers/MapContainer_01'
import HistoryContainer from '../Containers/HistoryContainer'
import ReportContainer from '../Containers/ReportContainer'
import ResultContainer from '../Containers/ResultContainer'
import FlowContainer from '../Containers/FlowContainer'
// import InfoContainer from '../Containers/InfoContainer'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import MessageContainer from '../Containers/MessageContainer'
import SpecailInfoContainer from '../Containers/SpecailInfoContainer'
import RegisterContainer from '../Containers/RegisterContainer'
import VerifyCodeContainer from '../Containers/VerifyCodeContainer'
import SpecailInfoInReportContainer from '../Containers/SpecailInfoInReportContainer'
import DeliveryStatusContainer from '../Containers/DeliveryStatusContainer'



const IntroNavigator = createStackNavigator(
    {
        [NAV_TYPES.LOGIN]:{
            screen:screenLogin,
            navigationOptions:{
                headerShown:false
            },
        },
  
    },
    {
        initialRouteName:NAV_TYPES.LOGIN
    }
)


const HomeNavigation = createStackNavigator(
    {
        [NAV_TYPES.MAIN_HOME]:{
            screen:screenHome,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.MAP]:{
            screen:MapContainer,
            navigationOptions:{
                headerShown:false,
                tabBarVisible: false,
            }
        },

    }
)
const Home01Navigation = createStackNavigator(
    {
       
        [NAV_TYPES.MAIN_HOME01]:{
            screen:Home,
            navigationOptions:{
                headerShown:false
            }
        },
        
        [NAV_TYPES.MAP01]:{
            screen:MapContainer_01,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.HISTORY]:{
            screen:HistoryContainer,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.REPORT]:{
            screen:ReportContainer,
            navigationOptions:{
                headerShown:false
            }
        },

        [NAV_TYPES.RESULTPACKAGE]:{
            screen:ResultContainer,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.FLOW]:{
            screen:FlowContainer,
            navigationOptions:{
                headerShown:false
            }
        },

        // [NAV_TYPES.INFO]:{
        //     screen:InfoContainer,
        //     navigationOptions:{
        //         headerShown:false
        //     }
        // },
        [NAV_TYPES.MESSAGE]:{
            screen:MessageContainer,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.SPECAILINFO]:{
            screen:SpecailInfoContainer,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.REGISTER]:{
            screen:RegisterContainer,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.VERIFYCODE]:{
            screen:VerifyCodeContainer,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.SPECAILINFODELIVERY]:{
            screen:SpecailInfoInReportContainer,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.DELIVERYSTATUS]:{
            screen:DeliveryStatusContainer,
            navigationOptions:{
                headerShown:false
            }
        },
        
    }
)




const PhoneCallNavigation = createStackNavigator(
    {
        [NAV_TYPES.PHONE_CALL]:{
            screen:PhoneCallContainer,
            navigationOptions:{
                headerShown:false
            }
        },
        
    }
)


//Tab Navigation
const TabNavigation = createBottomTabNavigator(
    {
        [NAV_TYPES.HOME01]:{
            screen:Home01Navigation,
            navigationOptions:{
                tabBarLabel:({focused})=>(
                    <Ionicons style={{textAlign:'center',}}  name="home" size={25} color={'#fff'}> </Ionicons>
                    
                ),
            }
        },
        [NAV_TYPES.HOME]:{
            screen:HomeNavigation,
            navigationOptions:{
                tabBarLabel:({focused})=>(
                    <Entypo style={{textAlign:'center',}}  name="old-phone" size={25} color={'#fff'}> </Entypo>
                ),
            }
        },
        [NAV_TYPES.PHONE_CALL]:{
            screen:PhoneCallNavigation,
            navigationOptions:{
                tabBarLabel:({focused})=>(
                    <Ionicons style={{textAlign:'center'}}  name="person" size={25} color={'#fff'} > </Ionicons>
                ),
            }
        },
    },
    {
        tabBarOptions: {
          showIcon: true,
          showLabel:true,
        //   activeBackgroundColor:'#f5f5f5',
        
          labelStyle: {
            fontSize: 20,
          },
          style:{height:Platform.OS==='ios'?50:53,paddingBottom:Platform.OS==='ios' ? 0 : 14,backgroundColor:Platform.OS==='ios' ? '#02475e' : '#02475e',
          borderTopWidth:Platform.OS==='ios' ? 2 : 2,borderTopColor:Platform.OS==='ios' ? '#fff' : '#fff'},
          activeColor:'blue',
          activeTabStyle:{backgroundColor:'blue'},
        
        },
    }

)


const CoreNavigation = createStackNavigator(
    {
        [NAV_TYPES.MAIN]:{
            screen:TabNavigation,
            navigationOptions: {
                headerShown:false
              }
        },
    },
    {
        initialRouteName:NAV_TYPES.MAIN
    }
)
const MainNavigation = createStackNavigator(
    {
        [NAV_TYPES.INTRO]:{
            screen:IntroNavigator,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.CORE]:{
            screen:CoreNavigation,
            navigationOptions:{
                headerShown:false
            }
        },
        [NAV_TYPES.LOADING]:{
            screen:LoadingContainer,
            navigationOptions:{
                headerShown:false
            }
        }
    },
    {
        initialRouteName:NAV_TYPES.LOADING
    }
)

Home01Navigation.navigationOptions = ({ navigation }) => {
  let tabBarVisible;
  if (navigation.state.routes.length > 1) {
    navigation.state.routes.map(route => {
      if (route.routeName === NAV_TYPES.FLOW) {
        tabBarVisible = true;
      } else {
        tabBarVisible = false;
      }
    });
  }

  return {
    tabBarVisible
  };
};

export default createAppContainer(MainNavigation)