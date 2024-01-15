import { React } from 'react';
import RadialChartWidget from '../graph/RadialChartWidget';
import { useData } from '../../../utils/DataContext';

const RadialChartData = () => {
  const { user, isBack } = useData();
console.log(user);
  let score
  score = isBack ? user.data.score ? user.data.score * 100 : user.data.todayScore * 100 
  : user.todayScore ? user.todayScore * 100 : user.score * 100

  console.log(score);
  const data = [
    {
      valeur: score
    },
  ];



  return (
  <RadialChartWidget data={data}/>
  );
};

export default RadialChartData;