import { useEffect, useState } from 'react';

const fetchDashboardApi = async () => {
  const res = await fetch('/mock/dashboard.json');
  return res.json();
};

export const useDashboardData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchDashboardApi();
      setData(res['cards']);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading };
};
