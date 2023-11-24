import React, { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'JAN',
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: 'FEB',
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: 'MAR',
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: 'APR',
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: 'JUN',
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: 'JUL',
    uv: 2390,
    pv: 3800,
    amt: 2500
  }
]

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v'

  render() {
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{ r: 8 }} />
          <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}
