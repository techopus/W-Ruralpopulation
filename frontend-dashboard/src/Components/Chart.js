import React, { useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from "recharts";
import Title from "./Title";

// Generate percentage Data
function createData(year, percentage) {
  return { year, percentage };
}


export default function Chart(props) {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    let country = props.country == null ? "Aruba" : props.country
    fetch("http://127.0.0.1:5000/api/ruralpopulation/" + country)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        
        let newData = []

        for (let i = 0; i < result.length; i++) {
          newData.push(createData(result[i][0], result[i][1]))
        }

        setData(newData);
      });
  }, [props.country]);

  return (
    <React.Fragment>
      <Title>{props.country}</Title>
      {props.country && (
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{
              top: 16,
              right: 16,
              bottom: 0,
              left: 24
            }}
          >
            <XAxis dataKey="year" />
            <YAxis>
              <Label
                angle={270}
                position="left"
                style={{ textAnchor: "middle" }}
              >
                % of rural population
              </Label>
            </YAxis>
            <Line
              type="monotone"
              dataKey="percentage"
              stroke="#556CD6"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}

    </React.Fragment>
  );
}
