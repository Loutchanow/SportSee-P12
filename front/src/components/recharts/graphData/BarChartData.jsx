import { useState, React, useEffect } from 'react';
import BarChartWidget from '../graph/BarChartWidget.jsx';
import { useData } from '../../../utils/DataContext';
import fetchData from '../../../utils/Hook.jsx';

const BarChartData = () => {
  const { userId, isBack, user } = useData();

  const [activity, setActivity] = useState();
  const fetchBackActivity = async (userId) => {
    try {
      let url = 'http://localhost:4000';
      const data = await fetchData(url, `/user/${userId}/activity`);
      setActivity(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  const fetchFrontActivity = async (userId) => {
    try {
      let url = 'data.json';
      const activity = await fetchData(url, '');
      let data = activity.USER_ACTIVITY.find((activity) => activity.userId === userId).sessions;
      setActivity(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  useEffect(()=> {
    isBack ? fetchBackActivity(userId): fetchFrontActivity(userId)
  },[userId, isBack])

  let data;
  data = isBack ? (data = activity?.data?.sessions || []) : (data = activity ? activity : []);

  data = data.map((currentElement, index) => {
    const updatedEntry = { ...currentElement };
    updatedEntry.index = index + 1;
    return updatedEntry;
  });

  return <BarChartWidget data={data} />;
};

export default BarChartData;
