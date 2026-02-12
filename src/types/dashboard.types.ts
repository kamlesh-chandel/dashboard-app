export interface DashboardCard {
  id?: string | number;
  label?: string;
  value?: string | number;
  subtitle?: string;
  [key: string]: unknown;
}

export interface DashboardResponse {
  cards: DashboardCard[];
}

export interface UseDashboardReturn {
  data: DashboardCard[];
  isLoading: boolean;
}
