// Global Driver Type
export type Driver = {
  id: string;
  name: string;
  code: string;
  number: number;
  team: string;
  image: string;
  carImage: string;
  points: number;
  teamColor: string;
};

// Global Team Type
export type Team = {
  id: string;
  name: string;
  color: string;
  carImage: string;
  logo: string;
  drivers: string[];
};