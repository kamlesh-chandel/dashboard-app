import { useEffect, useState } from 'react';
import type {
  DashboardResponse,
  DashboardCard,
  UseDashboardReturn,
} from '@/types/dashboard.types';

const fetchDashboardApi = async (): Promise<DashboardResponse> => {
  const res = await fetch('/mock/dashboard.json');
  return res.json();
};

export const useDashboardData = (): UseDashboardReturn => {
  const [data, setData] = useState<DashboardCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
