import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./yandexMap.css";

export default function YmapsComponent() {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  return (
    <YMaps>
      <Map defaultState={defaultState} width={"100%"} height={"100%"}>
        <Placemark geometry={[55.684758, 37.738521]} />
      </Map>
    </YMaps>
  );
}
