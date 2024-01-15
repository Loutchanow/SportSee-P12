import { React, useState, useEffect } from 'react';
import LineChartWidget from '../graph/LineChartWidget.jsx';
import { useData } from '../../../utils/DataContext';
import fetchData from '../../../utils/Hook.jsx';

const LineChartData = () => {
  const { userId, isBack } = useData();
  const [session, setSession] = useState([]);
  const fetchBackSession = async (userId) => {
    try {
      let url = 'http://localhost:4000';
      const data = await fetchData(url, `/user/${userId}/average-sessions`);
      setSession(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  const fetchFrontSession = async (userId) => {
    try {
      let url = 'data.json';
      const activity = await fetchData(url, '');
      let data = activity.USER_AVERAGE_SESSIONS.find((session) => session.userId === userId).sessions;
      setSession(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  useEffect(()=> {
    isBack ? fetchBackSession(userId): fetchFrontSession(userId)
  },[userId, isBack])

  let week = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  let data;

  data = isBack ? session?.data?.sessions || [] : session ? session : [];

  let dataWithDay = [];

  for (let i = 0; i < data.length; i++) {
    dataWithDay.push({
      ...data[i],
      day: week[i],
    });
  }

  return <LineChartWidget data={dataWithDay} />;
};

export default LineChartData;
