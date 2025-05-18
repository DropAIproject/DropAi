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
    

      <div className='feature-card'>
              <div className="feature-icon">Перейти</div>
              <h3 className="feature-title">{project.name}</h3>
              <p className="feature-description">Дедлайн: {project.deadline}</p>
            </div>
    </Card>
  );
}
