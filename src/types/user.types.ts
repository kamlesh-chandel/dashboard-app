export interface AssignedGame {
  gameName: string;
  type: string;
}

export interface usersProps {
  _id: string;
  name: string;
  email: string;
  phone: string;
  assignedGames: AssignedGame[];
}
