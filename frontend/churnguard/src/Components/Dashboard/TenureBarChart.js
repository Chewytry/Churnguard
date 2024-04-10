import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../theme";
import React, {useState, useEffect} from "react";
import axios from 'axios';

const TenureBarChart =  ({ isDashboard = false}) => {   // accept 'isDashboard' as prop
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data, setData] = useState([]);
    const [transformedData, setTransformedData] = useState([]);

    useEffect(() => {
      axios.get("/data")
        .then(res => {
          setData(res.data);
          const groupedData = groupDataByTenure(res.data);
          setTransformedData(groupedData);
        })
        .catch(err => console.log(err));
    }, []);
    
    // Function to group data by tenure ranges
    const groupDataByTenure = (data) => {
      const tenureGroups = {
        "0": [],
        "0.5": [],
        "1": [],
        "2": [],
        "3": [],
        "3.5": [],
        "4": []
      };
    
      data.forEach(customer => {
        const tenure = customer.Tenure;
        if (tenure <= 0.5) {
          tenureGroups["0.5"].push(customer);
        } else if (tenure <= 1) {
          tenureGroups["1"].push(customer);
        } else if (tenure <= 2) {
          tenureGroups["2"].push(customer);
        } else if (tenure <= 3) {
          tenureGroups["3"].push(customer);
        } else if (tenure <= 3.5) {
          tenureGroups["3.5"].push(customer);
        } else {
          tenureGroups["4"].push(customer);
        }
      });
    
      // Convert tenure groups into desired format
      const transformedData = Object.entries(tenureGroups).map(([tenureRange, customers]) => ({
        tenure: tenureRange,
        churn: customers.reduce((total, customer) => total + (customer.Churn === 1 ? 1 : 0), 0)
      }));
    
      return transformedData;
    };

    return (
    <ResponsiveBar
      data={transformedData}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
      }}
      keys={["churn"]}
      indexBy="tenure"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      // defs={[
      //   {
      //     id: "dots",
      //     type: "patternDots",
      //     background: "inherit",
      //     color: "#38bcb2",
      //     size: 4,
      //     padding: 1,
      //     stagger: true,
      //   },
      //   {
      //     id: "lines",
      //     type: "patternLines",
      //     background: "inherit",
      //     color: "#eed312",
      //     rotation: -45,
      //     lineWidth: 6,
      //     spacing: 10,
      //   },
      // ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Years of Tenure", // changed
        legendPosition: "middle",
        legendOffset: 40,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "customer age", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default TenureBarChart;