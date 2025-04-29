import { useEffect, useState } from 'react';
import { getProjects } from '../services/projectService';
import { Project } from '../types';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return { projects };
}

