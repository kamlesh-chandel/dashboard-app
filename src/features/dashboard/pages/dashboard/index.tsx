import { useNavigate } from 'react-router-dom';
import Sidebar from '@/components/layout/sidebar';
import Card from '@/components/common/card';
import BarChart from '@/components/common/bar-chart';
import { useDashboardData } from '@/hooks/useDashboardData';
import Loader from '@/components/common/Loader';
import PageHeader from '@/components/layout/page-header';

import './index.css';
import '@/styles/theme.css';

const Dashboard = () => {
  const { data, isLoading } = useDashboardData();
  const navigate = useNavigate();

  if (isLoading) return <Loader />;

  const handleUsersClick = () => {
    navigate('/dashboard/users');
  };

  const getCards = () => {
    return data?.map(({ label, value, subtitle }) => (
      <Card
        key={label}
        title={label ?? ''}
        value={value}
        subtitle={subtitle}
        onClick={label === 'Users' ? handleUsersClick : undefined}
      />
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
        <PageHeader title="Dashboard" />
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
