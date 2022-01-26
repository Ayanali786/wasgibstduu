import React from 'react'
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';


export default function Home({ navigation }) {



  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white'
    }}>

      <View style={{
        paddingLeft: 13,
        paddingRight: 13,

      }}>
        {/* icon back */}

      </View>
      <View style={{ backgroundColor: '#01a949', height: 300 }}>
        <View style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 20,
          height: 80,
        }}>
          <FontAwesome style={{ backgroundColor: '#ffffff', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, padding: 10, height: 50, color: '#b1b1b1' }} name="search" size={25} />
          <TextInput style={{ width: '60%', backgroundColor: '#ffffff', padding: 10, height: 50, color: '#b1b1b1', fontWeight: 'bold' }} placeholder='Type your search here' />
          <Ionicons style={{ backgroundColor: '#ffffff', borderTopRightRadius: 5, borderBottomRightRadius: 5, padding: 10, height: 50, color: '#b1b1b1' }} name="ios-options-outline" size={25} />
        </View>
        <View style={{ paddingHorizontal: 15, borderRadius: 10, marginTop: 20 }}>

          <View style={{
            flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center',
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Auto_Mobiles')}>
              <View style={{
                padding: 10, paddingVertical: 20, width: 110,
                borderWidth: 1, borderColor: '#F8F8F8', borderBottomColor: 'white'
              }}>
                <AntDesign name='car' style={{ color: '#b1b1b1', fontSize: 40, textAlign: "center" }} />
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 13 }}>Auto Mobiles</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Phone_and_Screen')}>
              <View style={{
                padding: 10, paddingVertical: 20, width: 110,
                borderWidth: 1, borderColor: '#F8F8F8'
              }}>
                <MaterialCommunityIcons name='tablet-cellphone' style={{ color: '#b1b1b1', fontSize: 40, textAlign: "center" }} />
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 13 }}>Phone & tablets</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Electronics')}>
              <View style={{
                padding: 10, paddingVertical: 20, width: 110,
                borderWidth: 1, borderColor: '#F8F8F8'
              }}>
                <MaterialCommunityIcons name='washing-machine' style={{ color: '#b1b1b1', fontSize: 40, textAlign: "center" }} />
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 13 }}>Electronics</Text>
              </View>

            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center'
          }}>
            <TouchableOpacity onPress={() => navigation.navigate('Real_State')}>
              <View style={{
                padding: 10, paddingVertical: 20, width: 110,
                borderWidth: 1, borderColor: '#F8F8F8'
              }}>
                <MaterialCommunityIcons name='home-city-outline' style={{ color: '#b1b1b1', fontSize: 40, textAlign: "center" }} />
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 13 }}>Real States</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Fashion')}>
              <View style={{
                padding: 10, paddingVertical: 20, width: 110,
                borderWidth: 1, borderColor: '#F8F8F8'
              }}>
                <Ionicons name='shirt' style={{ color: '#b1b1b1', fontSize: 40, textAlign: "center" }} />
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 13 }}>Fashion</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Jobs')}>
              <View style={{
                padding: 10, paddingVertical: 20, width: 110,
                borderWidth: 1, borderColor: '#F8F8F8'
              }}>
                <Ionicons name='notifications' style={{ color: '#b1b1b1', fontSize: 40, textAlign: "center" }} />
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 13 }}>Jobs</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={{
            flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center',
            //  borderTopRightRadius: 10 ,
            //   borderTopLeftRadius : 10
          }}>

            <TouchableOpacity onPress={() => navigation.navigate('Services')}>
              <View style={{
                padding: 10, paddingVertical: 20, width: 110,
                borderWidth: 1, borderColor: '#F8F8F8'
              }}>
                <FontAwesome name='handshake-o' style={{ color: '#b1b1b1', fontSize: 40, textAlign: "center" }} />
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 13 }}>Services</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Learning')}>
              <View style={{
                padding: 10, paddingVertical: 20, width: 110,
                borderWidth: 1, borderColor: '#F8F8F8'
              }}>
                <Entypo name='open-book' style={{ color: '#b1b1b1', fontSize: 40, textAlign: "center" }} />
                <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 13 }}>Learning</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Events')}>
            <View style={{
              padding: 10, paddingVertical: 20, width: 110,
              borderWidth: 1, borderColor: '#F8F8F8'
            }}>
              <MaterialCommunityIcons name='pine-tree-fire' style={{ color: '#b1b1b1', fontSize: 40, textAlign: "center" }} />
              <Text style={{ textAlign: 'center', marginTop: 10, fontSize: 13 }}>Events</Text>
            </View>
            </TouchableOpacity>
          </View>

          {/* Sponsored Ads   */}

          <ScrollView>



            <View style={{ marginTop: 20 }}>
              <Text style={{ color: "black", fontSize: 18, fontFamily: "Arial" }}>SPONSORED ADS</Text>
            </View>

            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image
                style={{ width: 150, height: 150 }}
                source={require("../../assets/premiumImages/img1.png")}
              />
              <TouchableOpacity onPress={() => {
                NavigationContainer.navigate('Login')
              }}>

                <Image
                  style={{ width: 150, height: 150 }}
                  source={require("../../assets/premiumImages/img1.png")}
                />
              </TouchableOpacity>
            </View>

          </ScrollView>



        </View>
      </View>

    </View>
  )
}
