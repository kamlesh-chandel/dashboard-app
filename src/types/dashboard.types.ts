export interface DashboardCard {
  id?: string | number;
  title?: string;
  value?: string | number;
  [key: string]: unknown;
}

export interface DashboardResponse {
  cards: DashboardCard[];
}

export interface UseDashboardReturn {
  data: DashboardCard[] | null;
  isLoading: boolean;
}
