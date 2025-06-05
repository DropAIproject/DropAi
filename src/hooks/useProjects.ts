import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";
import { Airdrop } from "../types";

export function useProjects() {
  const [projects, setProjects] = useState<Airdrop[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return { projects };
}
