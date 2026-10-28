import ButtonGitHub from "../button/ButtonGitHub";

export default function ProjectCard({ projects = [] }) {
  return (
    <div className="card-content">
      <div className="card-title">
        <h2>Projects</h2>
      </div>

      {projects.length === 0 ? (
        <p className="projects-empty">No public projects yet.</p>
      ) : (
        <ul className="card-projects">
          {projects.map((p) => (
            <li className="projects-item" key={p.id}>
              <div className="projects-info">
                <div className="projects-header">
                  <span className="projects-name">{p.name}</span>
                  <span className="projects-stars">⭐ {p.stargazers_count}</span>
                </div>

                {p.description && (
                  <p className="projects-description">{p.description}</p>
                )}

                {p.language && (
                  <span className="projects-language">
                    <span className="projects-dot" />
                    {p.language}
                  </span>
                )}
              </div>

              <ButtonGitHub
                buttonName="Code"
                className="button-finder"
                href={p.html_url}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}