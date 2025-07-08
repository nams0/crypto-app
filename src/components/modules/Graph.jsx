import {
  CartesianGrid,
  Legend,
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { convertData } from "../helpers/convertData"

function Graph({ chart, type }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={400} height={400} data={convertData(chart, type)}>
        <CartesianGrid stroke="#404042" strokeDasharray="3 3" />
        <Area
          type="monotone"
          dataKey={type}
          stroke="#3874ff"
          strokeWidth="2px"
        />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" />,
        <Legend />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default Graph
