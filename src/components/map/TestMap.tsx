import { fromLonLat } from "ol/proj";
import { Coordinate } from "ol/coordinate";
import { Point } from "ol/geom";
import "ol/ol.css";
import { RMap, ROSM, RLayerVector, RFeature, ROverlay, RStyle } from "rlayers";
import locationIcon from "./locationIcon.svg";
import { useEffect, useState } from "react";
import { View } from "ol";

const TestMap = (props: {
  coord: { lat: number; lon: number };
  height: string;
  zoom: number;
}): JSX.Element => {
  const [coords, setCoords] = useState<Record<string, Coordinate>>({
    origin: [props.coord.lon, props.coord.lat],
  });

  //   let coords: Record<string, Coordinate> = {
  //     origin: [props.coord.lon, props.coord.lat],
  //   };

  const [center, setCenter] = useState<Coordinate>(fromLonLat(coords.origin));
  let view = new View({
    center: [props.coord.lon, props.coord.lat],
    zoom: 4,
  });

  useEffect(() => {
    setCoords({ origin: [props.coord.lon, props.coord.lat] });
    setCenter(fromLonLat(coords.origin));
  }, [props.coord]);

  return (
    <RMap
      width={"100%"}
      height={props.height}
      initial={{ center: fromLonLat(coords.origin), zoom: 4 }}
      //   view={view}
      //   initial={{ center: fromLonLat(view.getCenter), zoom: 4 }}
    >
      <ROSM />
      <RLayerVector zIndex={10}>
        <RStyle.RStyle>
          <RStyle.RIcon src={locationIcon} anchor={[0.5, 0.8]} />
        </RStyle.RStyle>
        <RFeature geometry={new Point(fromLonLat(coords.origin))}>
          {/* <ROverlay className="capitalize">{props.city}</ROverlay> */}
        </RFeature>
      </RLayerVector>
    </RMap>
  );
};
export default TestMap;
