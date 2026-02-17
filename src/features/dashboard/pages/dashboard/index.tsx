import Sidebar from '@/components/layout/sidebar';
import Card from '@/components/common/card';
import BarChart from '@/components/common/bar-chart';
import { useDashboardData } from '@/hooks/useDashboardData';
import Loader from '@/components/common/Loader';

import './index.css';
import '@/styles/theme.css';

const Dashboard = () => {
  const { data, isLoading } = useDashboardData();

  const storedUser = localStorage.getItem('user');

  const userEmail = storedUser
    ? JSON.parse(storedUser)?.email || 'User'
    : 'User';

  if (isLoading) return <Loader />;

  const getCards = () => {
    return data?.map(({ label, value, subtitle }) => (
      <Card title={label ?? ''} value={value} subtitle={subtitle} />
    ));
  };

  const chartData =
    data
      ?.filter((item) => item.label && item.value !== undefined)
      .map((item) => ({
        label: item.label as string,
        value: Number(item.value),
      })) ?? [];

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">
        <div className="dashboard-heading-wrapper">
          <h1>Dashboard</h1>
          <div>
            Welcome, <span className="user-email">{userEmail}</span>
          </div>
        </div>
        <div className="content-body">
          <div className="cards-wrapper">{getCards()}</div>
          <div className="chart-container">
            <h3>Analytics Overview</h3>
            <div className="chart-wrapper">
              <BarChart data={chartData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
