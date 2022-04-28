import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
  Pressable,
  Linking,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {SliderBox} from 'react-native-image-slider-box';

export default function Categories_detail({route, navigation}) {
  const {
    CATEGORY,
    TITLE,
    PRICE,
    CITY,
    DISCRIPTION,
    IMAGE,
    UID,
    LIKE,
    AUTO_ID,
    USER_LIKE,
  } = route.params;
  const [user, setUser] = useState({});
  const [like, setLike] = React.useState(0);

  console.log(LIKE)

  const [e, setE] = useState({});
  // console.log()

  const getData = async () => {
    const value = await AsyncStorage.getItem('uid');
    setUser(JSON?.parse(value));
  };

  useFocusEffect(
    React.useCallback(() => {
      getData();
      firestore()
        .collection('Users')
        .doc(UID)
        .onSnapshot(documentSnapshot => {
          setE(documentSnapshot.data());
        });
    }, []),
  );

  const [show, setshow] = React.useState(USER_LIKE !== user?.USER_ID);

  console.log("USER_LIKE ",USER_LIKE)

  const toggle = () => {
    setshow(!show);
    if (show === true) {
      firestore()
        .collection('Category')
        .doc(AUTO_ID)
        .update({
          LIKE: firestore.FieldValue.arrayRemove(user?.USER_ID),
        });
    } else {
      let forDeletion = [user?.USER_ID];

      let arr = LIKE;

      arr = arr.filter(item => !forDeletion.includes(item));

      firestore()
        .collection('Category')
        .doc(AUTO_ID)
        .update({
          LIKE: [...arr, user?.USER_ID],
        });
    }
  };

  // !!! Read below about array.includes(...) support !!!

  const increment = () => {
    setLike(like + 1);
  };

  const decrement = () => {
    setLike(like - 1);
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginHorizontal: 10,
        }}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={{color: 'white', fontSize: 20, marginVertical: 15}}>
            {/* {isEnabled ? } */}
            <Feather name="arrow-left" size={25} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggle}>
          <Text style={{marginVertical: 15}}>
            {show ? (
              <AntDesign name="heart" size={25} color="red" />
            ) : (
              <AntDesign name="hearto" size={25} color="red" />
            )}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <SliderBox
          sliderBoxHeight={250}
          circleLoop={true}
          autoplay={true}
          dotColor={'white'}
          inactiveDotColor={'gray'}
          images={IMAGE}
          onCurrentImagePressed={index =>
            console.warn(`image ${index + 1} pressed`)
          }
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              paddingVertical: 5,
              width: 260,
              fontFamily: 'JosefinSans-Bold',
            }}>
            {TITLE}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="location-outline"
              style={{color: '#CECECE', fontSize: 13, paddingVertical: 5}}
            />
            <Text
              style={{
                color: '#CECECE',
                fontSize: 13,
                paddingVertical: 5,
                marginLeft: 5,
                fontFamily: 'JosefinSans-Regular',
              }}>
              {CITY}
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{marginRight: 20}}>
            <AntDesign name="sharealt" size={25} style={{color: 'red'}} />
          </Text>
          <Text>
            <AntDesign
              name="exclamationcircleo"
              size={25}
              style={{color: 'red'}}
            />
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          width: '100%',
        }}>
        <View style={{borderWidth: 1, borderColor: 'white', width: '40%'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'JosefinSans-Bold',
            }}>
            {PRICE}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: 150,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            paddingVertical: 8,
            backgroundColor: 'gold',
          }}>
          <Text style={{marginRight: 10}}>
            <FontAwesome name="phone" style={{color: 'black', fontSize: 18}} />
          </Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(`tel:${e.PHONE}`);
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 16,
                fontFamily: 'JosefinSans-Regular',
              }}>
              Call Seller
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 50,
          paddingHorizontal: 12,
          marginTop: 15,
        }}>
        <View>
          <Text
            style={{
              color: '#CECECE',
              fontSize: 13,
              paddingVertical: 5,
              fontFamily: 'JosefinSans-Regular',
            }}>
            Posted By
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              paddingVertical: 5,
              fontFamily: 'JosefinSans-Regular',
            }}>
            Customer
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
        }}>
        <View>
          <Text
            style={{
              color: '#CECECE',
              fontSize: 13,
              paddingVertical: 5,
              fontFamily: 'JosefinSans-Regular',
            }}>
            {CATEGORY}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              paddingVertical: 5,
              width: 200,
              textAlign: 'right',

              fontFamily: 'JosefinSans-Regular',
            }}>
            {TITLE}
          </Text>
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 12,
          marginTop: 5,
        }}>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              paddingVertical: 5,
              fontFamily: 'JosefinSans-Bold',
            }}>
            Overview
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: '#CECECE',
              fontSize: 13,
              paddingVertical: 5,
              fontFamily: 'JosefinSans-Regular',
            }}>
            {DISCRIPTION}
          </Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 12,
          marginTop: 5,
          marginBottom: 20,
        }}>
        <View>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              paddingVertical: 5,
              fontFamily: 'JosefinSans-Bold',
            }}>
            Photo Gallery
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            style={{width: 300, height: 300, borderRadius: 5, marginTop: 20}}
            source={{uri: IMAGE[0]}}
          />
        </View>
      </View>

      {e.EMAIL !== user.EMAIL && (
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Send_offer', {
                e,
                current_user: user,
                profile: e.PROFILE,
                IMAGE,
                PRICE,
                DISCRIPTION,
                CITY,
                CATEGORY,
                TITLE,
                UID,
                NAME: e.NAME,
                LIKE : LIKE,
              })
            }>
            <View
              style={{
                backgroundColor: '#f0f2f5',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 15,
                margin: 10,
                marginBottom: 0,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontFamily: 'JosefinSans-Bold',
                }}>
                Send Offer
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('chatscreen', {
                e,
                current_user: user,
                title: TITLE,
              })
            }>
            <View
              style={{
                backgroundColor: '#f0f2f5',
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 15,
                margin: 10,
                borderRadius: 5,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontFamily: 'JosefinSans-Bold',
                }}>
                Send Message
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}
