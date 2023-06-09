import React from "react";
// import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data01 = [
    { name: "Assignment 1", value: 60 },
    { name: "Assignment 2", value: 60 },
    { name: "Assignment 3", value: 56 },
    { name: "Assignment 4", value: 50 },
    { name: "Assignment 5", value: 51 },
    { name: "Assignment 6", value: 56 },
    { name: "Assignment 7", value: 60 },
    { name: "Assignment 8", value: 60 },
  ];
  const data02 = [
    { name: "Assignment 1", value: 60 },
    { name: "Assignment 2", value: 60 },
    { name: "Assignment 3", value: 56 },
    { name: "Assignment 4", value: 50 },
    { name: "Assignment 5", value: 51 },
    { name: "Assignment 6", value: 56 },
    { name: "Assignment 7", value: 60 },
    { name: "Assignment 8", value: 60 },
  ];

  return (
    <div className="lg:grid items-center justify-center sm:col-auto ">
      <div className="col-span-10 mb-10   ">
        {" "}
        <h1 className=" text-purple-300  ">Assignment Information</h1>
      </div>
      <div className="col-start-1 col-end-3 ">
        <table className=" border  ">
          <thead className="border-spacing-6">
            <tr className="border border-violet-800 p-4">
              <th className="p-2 ">ID</th>
              <th className="p-4">Assignment Name</th>
              <th className="p-2">Mark</th>
            </tr>
          </thead>
          <tbody className="border border-purple-600">
            <tr>
              <td className=" p-2">01</td>
              <td className="">Assignment 1 </td>
              <td className="">60</td>
            </tr>
            <tr>
              <td className="p-2">02</td>
              <td>Assignment 2</td>
              <td>60</td>
            </tr>
            <tr>
              <td className="p-2">03</td>
              <td>Assignment 3</td>
              <td>56</td>
            </tr>
            <tr>
              <td className="p-2">04</td>
              <td>Assignment 4</td>
              <td>50</td>
            </tr>
            <tr>
              <td className="p-2">05</td>
              <td>Assignment 5</td>
              <td>51</td>
            </tr>
            <tr>
              <td className="p-2">06</td>
              <td>Assignment 6</td>
              <td>56</td>
            </tr>
            <tr>
              <td className="p-2">07</td>
              <td>Assignment 7</td>
              <td>60</td>
            </tr>
            <tr>
              <td className="p-2">08</td>
              <td>Assignment 8</td>
              <td>60</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <div className="col-end-7 col-span-2">
          {" "}
          <PieChart width={450} height={250} data={data01}>
            <Pie
              data={data01}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
            />
            <Tooltip />

            <Pie
              data={data02}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </div>{" "}
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default Statistics;
