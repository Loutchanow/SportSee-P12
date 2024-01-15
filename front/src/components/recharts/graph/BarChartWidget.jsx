import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const CustomLegendContainer = styled.div`
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
`;

const CustomLegendItem = styled.p`
  margin: 5px 0;
`;

const renderLegend = (props) => {
  const { payload } = props;
  return (
    <CustomLegendContainer>
      <CustomLegendItem>
        <span>Activité quotidienne</span>
      </CustomLegendItem>
      <CustomLegendItem>
        <span style={{ color: payload[0].color }}>● </span>Poids (kg)
        <span style={{ color: payload[1].color }}>● </span>Calories Brûlées (kCal)
      </CustomLegendItem>
    </CustomLegendContainer>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ background: 'red', color: 'white', padding: '20px 10px' }}>
        <p className="label"> {payload[1].value}kg</p>
        <p className="label"> {payload[0].value}kcal</p>
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {
  render() {
    const { data } = this.props;

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 20, right: 20, left: 40, bottom: 20 }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="index" axisLine={false} padding={{ left: -30, right: -30 }} tickLine={false} />
          <YAxis yAxisId="left" orientation="right" dataKey="kilogram" axisLine={false} tickLine={false} tickCount={4} domain={['dataMin - 2', 'dataMax + 2']}/>
          <YAxis yAxisId="right" dataKey="calories" hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Bar yAxisId="left" dataKey="kilogram" fill="#000000" radius={[20, 20, 0, 0]} barSize={10} barCategoryGap={10} />
          <Bar yAxisId="right" dataKey="calories" fill="#FF0000" radius={[20, 20, 0, 0]} barSize={10} barCategoryGap={10} />
          <Legend verticalAlign="top" height={70} content={renderLegend} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
