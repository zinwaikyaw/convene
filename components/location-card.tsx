import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BoldText } from "./styled-text";

export default function LOCATION({ location }: { location: string }) {
  return (
    <View
      style={{
        borderColor: "coral",
        borderWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        backgroundColor: "rgba(255,127,80, 0.3)",
        alignSelf: "flex-start",
        marginRight: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-location-outline" size={20} color={"coral"} />
        <BoldText style={{ color: "coral" }}>{location}</BoldText>
      </View>
    </View>
  );
}
