import { Project } from '../types';

export const getProjects = async (): Promise<Project[]> => {
  return [
    { id: 1, name: 'Solana NFT Drop', link: 'https://example.com', deadline: '2025-06-01' },
    { id: 2, name: 'Token Farming Event', link: 'https://example2.com', deadline: '2025-07-15' },
  ];
};
