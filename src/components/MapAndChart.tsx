import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import CasesFluctuations from "./CasesFluctuations";
import CountriesMapWithCovidCases from "./CountriesMapWithCovidCases";

const MapAndChart = () => {
  const uniqueDates: string[] = [];
  const casesArray: number[] = [];
  const deathArray: number[] = [];
  const recoveredArray: number[] = [];

  //fetching overall covid cases data
  const covidQuery = useQuery({
    queryKey: ["covid"],
    queryFn: async () => {
      const response = await axios.get(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
      const data = await response.data;

      return data;
    },
  });

  if (covidQuery.isLoading)
    return <h1 className="flex flex-col items-center">Loading....</h1>;
  if (covidQuery.isError)
    return (
      <h1 className="flex flex-col items-center">Error loading data!!!</h1>
    );

  const dates = Object.keys(covidQuery.data.cases);
  const result: Record<string, Record<string, any>>[] = [];

  dates.forEach((date) => {
    const dateObj: Record<string, any> = { [date]: {} };
    Object.keys(covidQuery.data).forEach((key) => {
      dateObj[date][key] = covidQuery.data[key][date];
    });
    result.push(dateObj);
  });

  result.forEach((dateObj) => {
    const date = Object.keys(dateObj)[0];
    const data = dateObj[date];

    uniqueDates.push(date);
    casesArray.push(data.cases);
    deathArray.push(data.deaths);
    recoveredArray.push(data.recovered);
  });

  return (
    <div className="flex flex-col absolute mt-2  flex-wrap right-32">
      <CasesFluctuations
        uniqueDates={uniqueDates}
        cases={casesArray}
        deaths={deathArray}
        recovered={recoveredArray}
      />
      <CountriesMapWithCovidCases />
    </div>
  );
};

export default MapAndChart;
