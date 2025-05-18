import { useProjects } from '../../hooks/useProjects';
import { ChecklistItem } from './ChecklistItem';

export function Checklist() {
  const { projects } = useProjects();

  return (
    <div className="airdrops">
      {projects.map((project) => (
        <ChecklistItem key={project.id} project={project} />
      ))}
    </div>
  );
}
