import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
        <p className="label" style={{ background: 'white', margin: '20px 10px' }}> {payload[0].value}min</p>
    );
  }
}
const renderLegend = (props) => {
  return (
    <h6 style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize:12, margin: "25px" }}>Durée moyenne des <br />sessions</h6>
  );
}
export default class Example extends PureComponent {

  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right:0,
            left:0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="day" axisLine={false} tickLine={false}
           tick={{ fontSize: 15, fill: 'rgba(255, 255, 255, 0.6)' }} padding={{ left: 20, right: 20 }}/>
          <Tooltip content={CustomTooltip} cursor={{ stroke: '#DD0000', strokeWidth: 60 }}/>
          <Legend verticalAlign="top" content={renderLegend} />
          <Line type="natural" dataKey="sessionLength" stroke="#ffffff" strokeWidth={2} activeDot={{ r: 8 }} dot={false}/>
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
