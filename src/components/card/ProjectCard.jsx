import ButtonGitHub from "../button/ButtonGitHub";

export default function ProjectCard({projects}){
    return(
        <div className="card-content">
            <div className="card-title">
                <h2>Projects</h2>
            </div>
            {projects.length === 0 ? (
                <p className="projects-empty">No public projects yet.</p>
            ): (
                <ul className="card-projects">
                    {projects.map((p) =>(
                        <li className="project-item" key={p.id}>
                            <div className="projects-header">
                                <p>{p.name}</p>
                            </div>

                            {p.description && (
                                <p className="projects-description">Description: {p.description}</p>
                            )}


                            <div className="projects-footer">
                                {p.language && (
                                    <span className="projects-language">● {p.language}</span>

                                )}
                                <ButtonGitHub 
                                    buttonName="Code"
                                    className= "button-finder"
                                    type="button"
                                    href={p.html_url}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}