import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Keyboard, StyleSheet, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  setTravelTimeInformation,
} from "../slices/navSlices";

const MapScreen = () => {
  const origin = useSelector(selectOrigin);
  const navigation = useNavigation();

  return (
    <View>
      <MapView
        style={{ height: "100%" }}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
          />
        )}
        <Marker
          coordinate={{
            latitude: origin.location.lat - 0.002,
            longitude: origin.location.lng - 0.003,
          }}
          title="Recycler 1"
        />
        <Marker
          coordinate={{
            latitude: origin.location.lat + 0.003,
            longitude: origin.location.lng - 0.003,
          }}
          title="Recycler 2"
        />
        <Marker
          coordinate={{
            latitude: origin.location.lat - 0.004,
            longitude: origin.location.lng + 0.0,
          }}
          title="Recycler 3"
        />

        <TouchableOpacity
          style={{
            top: 50,
            backgroundColor: "white",
            width: 60,
            height: 60,
            borderRadius: 60 / 2,
          }}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Entypo
            name="home"
            size={50}
            color="black"
            style={{ position: "absolute", left: 5 }}
          />
        </TouchableOpacity>
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
