import "./AirdropCard.css";

interface ProjectProps {
  project: {
    _id: string;
    title: string;
    url: string;
    description: string;
    steps?: string[];
  };
}

export function ChecklistItem({ project }: ProjectProps) {
  return (
    <div className="airdrop-card">
      <div className="card-header">
        <div className="card-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7L12 12L22 7L12 2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 17L12 22L22 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 12L12 17L22 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="card-status">
          <span className="status-badge">Active</span>
        </div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>

        {project.steps && project.steps.length > 0 && (
          <div className="steps-info">
            <span className="steps-count">{project.steps.length} steps</span>
          </div>
        )}
      </div>

      <div className="card-footer">
        <button className="action-button">
          <span>Start Airdrop</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5L19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
