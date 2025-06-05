export interface Project {
  id: number;
  name: string;
  link: string;
  deadline: string;
}

export interface Airdrop {
  _id: string;
  title: string;
  url: string;
  description: string;
  steps?: string[];
}
