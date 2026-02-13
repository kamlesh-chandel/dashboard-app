import type { tableColumnProps } from '@/types/ui.types';

export const tableColumns: readonly tableColumnProps[] = [
  { id: 'name', label: 'Name' },
  { id: 'email', label: 'Email', align: 'center' },
  { id: 'phone', label: 'Phone', align: 'center' },
  {
    id: 'assignedGames',
    label: 'Assigned Games',

    align: 'center',
  },
  { id: 'actions', label: 'Actions', align: 'center' },
];

export const users = [
  {
    name: 'Karan Malhotra',
    email: 'karan.m@gmail.com',
    phone: '9765432109',
    assignedGames: [
      { gameName: 'Call of Duty', type: 'PC Game' },
      { gameName: 'FIFA 24', type: 'Console Game' },
    ],
  },
  {
    name: 'Riya Kapoor',
    email: 'riya.kapoor@gmail.com',
    phone: '9098765432',
    assignedGames: [
      { gameName: 'Temple Run', type: 'Mobile Game' },
      { gameName: 'Chess', type: 'Board Game' },
    ],
  },
  {
    name: 'Suresh Yadav',
    email: 'suresh.yadav@gmail.com',
    phone: '9811122233',
    assignedGames: [
      { gameName: 'Kabaddi', type: 'Outdoor Game' },
      { gameName: 'Free Fire', type: 'Mobile Game' },
    ],
  },
  {
    name: 'Anjali Singh',
    email: 'anjali.s@gmail.com',
    phone: '9784512365',
    assignedGames: [
      { gameName: 'Ludo', type: 'Board Game' },
      { gameName: 'Asphalt 9', type: 'Mobile Game' },
    ],
  },
  {
    name: 'Rohit Jain',
    email: 'rohit.jain@gmail.com',
    phone: '9123987654',
    assignedGames: [
      { gameName: 'Valorant', type: 'PC Game' },
      { gameName: 'Chess', type: 'Board Game' },
    ],
  },
  {
    name: 'Pooja Sharma',
    email: 'pooja.sharma@gmail.com',
    phone: '9870011223',
    assignedGames: [
      { gameName: 'Cricket', type: 'Outdoor Game' },
      { gameName: 'Subway Surfers', type: 'Mobile Game' },
    ],
  },
  {
    name: 'Manish Kumar',
    email: 'manish.k@gmail.com',
    phone: '9001122334',
    assignedGames: [
      { gameName: 'Football', type: 'Outdoor Game' },
      { gameName: 'BGMI', type: 'Mobile Game' },
    ],
  },
  {
    name: 'Simran Kaur',
    email: 'simran.kaur@gmail.com',
    phone: '8899001122',
    assignedGames: [
      { gameName: 'Ludo', type: 'Board Game' },
      { gameName: 'FIFA 24', type: 'Console Game' },
    ],
  },
  {
    name: 'Dev Patel',
    email: 'dev.patel@gmail.com',
    phone: '9019988776',
    assignedGames: [
      { gameName: 'Call of Duty', type: 'PC Game' },
      { gameName: 'Asphalt 9', type: 'Mobile Game' },
    ],
  },
  {
    name: 'Nisha Shah',
    email: 'nisha.shah@gmail.com',
    phone: '9887766554',
    assignedGames: [
      { gameName: 'Temple Run', type: 'Mobile Game' },
      { gameName: 'Chess', type: 'Board Game' },
    ],
  },
  {
    name: 'Yash Thakur',
    email: 'yash.thakur@gmail.com',
    phone: '9776655443',
    assignedGames: [
      { gameName: 'Kabaddi', type: 'Outdoor Game' },
      { gameName: 'Free Fire', type: 'Mobile Game' },
    ],
  },
  {
    name: 'Tina Das',
    email: 'tina.das@gmail.com',
    phone: '9655443322',
    assignedGames: [
      { gameName: 'Cricket', type: 'Outdoor Game' },
      { gameName: 'Subway Surfers', type: 'Mobile Game' },
    ],
  },
  {
    name: 'Harsh Vardhan',
    email: 'harsh.v@gmail.com',
    phone: '9544332211',
    assignedGames: [
      { gameName: 'Valorant', type: 'PC Game' },
      { gameName: 'Chess', type: 'Board Game' },
    ],
  },
];
