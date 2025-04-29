import { Card } from '../ui/Card';

interface ProjectProps {
  project: {
    id: number;
    name: string;
    link: string;
    deadline: string;
  };
}

export function ChecklistItem({ project }: ProjectProps) {
  return (
    <Card>
      <h2 className="text-xl font-bold">{project.name}</h2>
      <p className="text-gray-500">Дедлайн: {project.deadline}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mt-2 inline-block"
      >
        Перейти
      </a>
    </Card>
  );
}
