import RadarChartWidget from '../graph/RadarChartWidget';
import { useState, React, useEffect } from 'react';
import { useData } from '../../../utils/DataContext';
import fetchData from '../../../utils/Hook.jsx';



const RadarChartData = () => {
  const { userId, isBack } = useData()
  
  
  const [performance, setPerformance]= useState();
  const fetchBackPerformance = async (userId) => {
    try {
    let url= "http://localhost:4000"
      const data = await fetchData(url, `/user/${userId}/performance`);
      setPerformance(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  const fetchFrontPerformance = async (userId) => {
    try {
      let url = 'data.json';
      const performance = await fetchData(url, '');
      let data = performance.USER_PERFORMANCE.find((performance) => performance.userId === userId)
      console.log(data);
      setPerformance(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  


  useEffect(() => {
    isBack ? fetchBackPerformance(userId) : fetchFrontPerformance(userId);
  }, [userId, isBack]);



  let dataWithKind = [];
  
let data
let kind
data = isBack? (performance?.data?.data || []) : performance?.data || []
kind = isBack? (performance?.data?.kind || []) : performance?.kind || []



  for (let i = 0; i < data.length; i++) {
    dataWithKind.push({
      ...data[i],
      kind: kind[i+1], 
    });
  }
  return (
   <RadarChartWidget data={dataWithKind}/>
  );
};

export default RadarChartData;