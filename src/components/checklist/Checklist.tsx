import { useProjects } from '../../hooks/useProjects';
import { ChecklistItem } from './ChecklistItem';

export function Checklist() {
  const { projects } = useProjects();

  return (
    <div className="mt-6 space-y-4">
      {projects.map((project) => (
        <ChecklistItem key={project.id} project={project} />
      ))}
    </div>
  );
}
