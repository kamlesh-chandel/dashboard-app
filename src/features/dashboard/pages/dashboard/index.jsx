import Sidebar from '@/components/layout/sidebar';
import Card from '@/components/common/card';
import BarChart from '@/components/common/bar-chart';
import { useDashboardData } from '@/hooks/useDashboardData';
import Loader from '@/components/common/Loader';

import './index.css';
import '@/styles/theme.css';

const Dashboard = () => {
  const {DASHBOARD_DATA, loading} = useDashboardData();

  if(loading) return <Loader />;

  const getCards = () => {
    return DASHBOARD_DATA.map((data) => (
      <Card title={data.label} value={data.value} subtitle={data.subtitle} />
    ));
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">
        <div className="content-header">
          <h1>Dashboard</h1>
        </div>
        <div className="content-body">
          <div className="cards-wrapper">{getCards()}</div>
          <div className="chart-container">
            <h3>Analytics Overview</h3>
            <div className="chart-wrapper">
              <BarChart data={DASHBOARD_DATA} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
