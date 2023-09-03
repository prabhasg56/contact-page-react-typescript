import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import markerIcon from "../resourses/marker.png";

const CountriesMapWithCovidCases = () => {
  //customise marker icon
  const customIcon = new Icon({
    iconUrl: markerIcon,
    iconSize: [38, 38], // size of the icon
  });

  //fetching country specific data
  const countrySpecific = useQuery({
    queryKey: ["country"],
    queryFn: async () => {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/countries"
      );
      const data = await response.data;

      return data;
    },
  });

  if (countrySpecific.isLoading)
    return <h1 className="flex flex-col items-center">Loading....</h1>;
  if (countrySpecific.isError)
    return (
      <h1 className="flex flex-col items-center">Error loading data!!!</h1>
    );

  const mapStyle = {
    height: "500px",
    width: "100%",
  };

  return (
    <div className="container-fluid mt-3 mb-3  p-4">
      <h1 className="flex justify-center m-2 font-bold border-b-2"> Country wise COVID Cases</h1>
      <MapContainer center={[20, 0]} zoom={2} style={mapStyle}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countrySpecific.data.map((data: any, index: any) => (
          <Marker
            key={index}
            position={[data.countryInfo.lat, data.countryInfo.long]}
            icon={customIcon}
          >
            <Popup>
              <div>
                <h2>{data.country}</h2>
                <p>Total Active Cases: {data.active}</p>
                <p>Total Recovered Cases: {data.recovered}</p>
                <p>Total Deaths: {data.deaths}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CountriesMapWithCovidCases;
