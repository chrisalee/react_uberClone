import React from "react";
import { useDispatch } from "react-redux";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestination, setOrigin } from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[tw`bg-white h-full`, styles.body]}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        {/* <Text style={[tw`pt-2 pb-10`, styles.text]}>UberClone</Text> */}

        <GooglePlacesAutocomplete
          placeholder= "Where From?"
          styles={{
            container: {
              flex: 0,
              marginBottom: 23,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onFail={(error) => console.error(error)}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          // requestUrl={{
          //   url:
          //     'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
          //   useOnPlatform: 'web',
          // }} // this in only required for use on the web. See https://git.io/JflFv more for details
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "#f9f9f9",
    width: "100%",
    backgroundColor: "#000000",
    fontSize: "2.5em",
    fontWeight: "700",
  },
  body: {
    textAlign: "center",
    alignItems: "center",
  },
});
