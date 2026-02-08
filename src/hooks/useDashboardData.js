import { useEffect, useState } from 'react';

const fetchDashboardApi = async () => {
  const res = await fetch('/mock/dashboard.json');
  return res.json();
};

export const useDashboardData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchDashboardApi();
      setData(res["cards"]);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { DASHBOARD_DATA: data, loading };
};
