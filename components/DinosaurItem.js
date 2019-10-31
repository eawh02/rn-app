import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Dinosaur from "../models/dinosaur";

const DinosaurItem = props => {
  return (
    <View style={styles.dinosaurItem}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.dinosaurRow, ...styles.dinosaurHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <Text style={styles.title} numberOfLines={1}>
                {props.title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.dinosaurRow, ...styles.dinosaurDetail }}>
            <Text></Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dinosaurItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden"
  },
  dinosaurRow: {
    flexDirection: "row"
  },
  dinosaurHeader: {
    height: "90%"
  },
  dinosaurDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center"
  }
});

export default DinosaurItem;
