import { Image, View } from "react-native";
import { MediumText, RegularText } from "./styled-text";
import ETA from "./eta-card";
import LOCATION from "./location-card";
import dayjs from "dayjs";
import "dayjs/locale/en";
import relativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useEffect, useState } from "react";

export default function PersonalEvents({
  event_title,
  event_image,
  start_date,
  start_time,
  event_description,
  event_location,
}: any) {
  const [eta, setEta] = useState("");

  useEffect(() => {
    function findEta() {
      dayjs.extend(relativeTime);
      dayjs.extend(customParseFormat);

      const dateTime = start_date + " " + start_time;
      const calculatedEta = dayjs(dateTime, "DD MMMM YYYY ").fromNow();
      calculatedEta.includes("minutes")
        ? setEta("today")
        : setEta(calculatedEta);
    }

    findEta();
  }, [eta]);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 8,
      }}
    >
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: 2,
            height: 30,
            backgroundColor: "#eee",
          }}
        />
        <Image
          source={{ uri: event_image }}
          style={{ width: 80, height: 80, borderRadius: 40 }}
          resizeMode="cover"
        />
        <View
          style={{
            width: 2,
            height: 30,
            backgroundColor: "#eee",
          }}
        />
      </View>
      <View style={{ marginBottom: 8, gap: 8 }}>
        <MediumText>{event_title}</MediumText>
        <View style={{ display: 'flex', flexDirection: 'row'}}>
          <ETA eta={eta} />
          <LOCATION location={event_location} />
        </View>
        <MediumText>{event_description}</MediumText>
      </View>
    </View>
  );
}
