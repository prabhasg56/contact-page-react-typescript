import React from "react";
import Chart from "react-apexcharts";

interface Props {
  uniqueDates: string[];
  cases: number[];
  deaths: number[];
  recovered: number[];
}

const CasesFluctuations = (props: Props) => {
  const { uniqueDates, cases, deaths, recovered } = props;

  return (
    <React.Fragment>
      <div className="container-fluid mt-3 mb-3 bg-gray-400 p-4 xl:ml-12 xs:ml-0  ">
      <h1 className="flex justify-center m-2 font-bold border-b-2"> Worldwise cases fluctuations</h1>

        <Chart
          type="line"
          series={[
            { name: "Cases", data: cases },
            { name: "Deaths", data: deaths },
            { name: "Recovered", data: recovered },
          ]}
          options={{
            title: { text: "Covid cases from 2020 to 2023" },
            xaxis: {
              title: { text: "Covid cases in Months" },
              categories: uniqueDates,
            },
            yaxis: {
              title: { text: "Covid cases fluctions" },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
};

export default CasesFluctuations;
