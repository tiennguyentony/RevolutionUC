import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    title: "Find recyclist",
    image:
      "https://cdn.pixabay.com/photo/2013/07/12/17/10/trashcan-151725_960_720.png",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Become recyclist",
    image:
      "https://facilities.unc.edu/wp-content/uploads/sites/256/2021/08/recycling.png",
    screen: "RecycleScreen", // Change in future...
  },
];
const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={{
            padding: 20,
            paddingLeft: 20,
            paddingBottom: 10,
            paddingTop: 20,
            backgroundColor: "#ebebeb",
            margin: 20,
          }}
        >
          <Image
            style={{ width: 120, height: 120, resizeMode: "contain" }}
            source={{ uri: item.image }}
          />
          <Text
            style={{ textAlign: "center", marginTop: 20, fontWeight: "bold" }}
          >
            {item.title}
          </Text>
          <Icon
            style={{
              padding: 2,
              backgroundColor: "#0495d4",
              borderRadius: 9999,
              width: 30,
              marginTop: 4,
            }}
            name="arrowright"
            color="white"
            type="antdesign"
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
