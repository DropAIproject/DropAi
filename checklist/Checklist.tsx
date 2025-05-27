import { useProjects } from "../../hooks/useProjects";
import { ChecklistItem } from "./ChecklistItem";
import "./AirdropCard.css";
export function Checklist() {
  const { projects } = useProjects();

  return (
    <div className="airdrop-grid">
      {projects.map((project) => (
        <ChecklistItem key={project._id} project={project} />
      ))}
    </div>
  );
}
