import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const renderLegend = (props) => {
  const { payload } = props;

  if (payload && payload.length > 0) {
    const value = payload[0].payload.valeur;
    return (
      <>
        <h6 style={{ fontSize: 12, margin: "25px" }}>Score</h6>
        <h6 style={{ color: 'grey', margin: "40px 120px", fontSize: 15 }}>
          <strong style={{ fontSize: 25, color: 'black' }}>{`${value}%`}</strong>
          <br />de votre<br /> objectif
        </h6>
      </>
    );
  }

  return null;
}

export default class Example extends PureComponent {

  render() {
    const { data } = this.props;

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart innerRadius="90" outerRadius="90" barSize={10} data={data} startAngle={90} endAngle={450}>
          <PolarAngleAxis type="number" domain={[0, 100]} dataKey={'pct'} angleAxisId={0} tick={false} />
          <RadialBar
            clockWise
            dataKey="valeur"
            fill='#ff0000'
            cornerRadius={10}
          />
          <Legend verticalAlign="top" content={renderLegend} />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }}
